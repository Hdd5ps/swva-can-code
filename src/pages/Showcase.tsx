import { useEffect, useState, type ChangeEvent, type FormEvent } from 'react';
import type { User } from '@supabase/supabase-js';
import { ExternalLink, Code, Palette, Trophy } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

type GalleryImage = {
  id: string;
  image_url: string;
  image_path: string;
  approved: boolean;
  created_at: string | null;
};

export function Showcase() {
  // Admin emails: add or remove emails here to control who can approve photos.
  const adminEmails = ['streamwise@uvawise.edu'];
  const [user, setUser] = useState<User | null>(null);
  const [approvedImages, setApprovedImages] = useState<GalleryImage[]>([]);
  const [pendingImages, setPendingImages] = useState<GalleryImage[]>([]);
  // Upload status text shown to visitors after they submit photos.
  const [uploadMessage, setUploadMessage] = useState('');
  const [uploadStatus, setUploadStatus] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');
  const [authMessage, setAuthMessage] = useState('');
  const [authError, setAuthError] = useState('');
  const [authEmail, setAuthEmail] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  const isAdmin = Boolean(user?.email && adminEmails.includes(user.email));

  const loadApprovedImages = async () => {
    if (!supabase) return;
    const { data, error } = await supabase
      .from('gallery_images')
      .select('id,image_url,image_path,approved,created_at')
      .eq('approved', true)
      .order('created_at', { ascending: false });

    if (!error && data) {
      setApprovedImages(data);
    }
  };

  const loadPendingImages = async () => {
    if (!supabase) return;
    const { data, error } = await supabase
      .from('gallery_images')
      .select('id,image_url,image_path,approved,created_at')
      .eq('approved', false)
      .order('created_at', { ascending: false });

    if (!error && data) {
      setPendingImages(data);
    }
  };

  const handleGalleryUpload = async (event: ChangeEvent<HTMLInputElement>) => {
    if (!supabase) {
      setUploadStatus('error');
      setUploadMessage('Upload is unavailable. Please try again later.');
      return;
    }

    const files = event.target.files;
    if (!files || files.length === 0) return;

    setUploadStatus('uploading');
    setUploadMessage('Uploading your photos...');

    try {
      await Promise.all(
        Array.from(files).map(async (file) => {
          const safeName = file.name
            .replace(/\s+/g, '-')
            .replace(/[^a-zA-Z0-9._-]/g, '')
            .toLowerCase();
          const filePath = `pending/${Date.now()}-${Math.random().toString(36).slice(2)}-${safeName}`;

          const { data: uploadData, error: uploadError } = await supabase
            .storage
            .from('showcase-gallery')
            .upload(filePath, file, { upsert: false, cacheControl: '3600' });

          if (uploadError || !uploadData) {
            throw uploadError ?? new Error('Upload failed');
          }

          const { data: publicUrlData } = supabase
            .storage
            .from('showcase-gallery')
            .getPublicUrl(uploadData.path);

          const { error: insertError } = await supabase
            .from('gallery_images')
            .insert({
              image_url: publicUrlData.publicUrl,
              image_path: uploadData.path,
              approved: false
            });

          if (insertError) {
            throw insertError;
          }
        })
      );

      setUploadStatus('success');
      setUploadMessage('Thanks! Your photos are waiting for admin approval.');
      if (isAdmin) {
        await loadPendingImages();
      }
    } catch (error) {
      setUploadStatus('error');
      setUploadMessage('Upload failed. Please try again.');
    } finally {
      event.target.value = '';
    }
  };

  const handleAdminSignIn = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!supabase) return;

    setAuthLoading(true);
    setAuthMessage('');
    setAuthError('');

    const { error } = await supabase.auth.signInWithOtp({
      email: authEmail,
      options: {
        emailRedirectTo: `${window.location.origin}/showcase`
      }
    });

    setAuthLoading(false);

    if (error) {
      setAuthError('Unable to send sign-in link. Please try again.');
      return;
    }

    setAuthMessage('Check your inbox for a sign-in link.');
  };

  const handleSignOut = async () => {
    if (!supabase) return;
    await supabase.auth.signOut();
  };

  const handleApprove = async (image: GalleryImage) => {
    if (!supabase) return;
    const { error } = await supabase
      .from('gallery_images')
      .update({ approved: true })
      .eq('id', image.id);

    if (!error) {
      await loadApprovedImages();
      await loadPendingImages();
    }
  };

  const handleReject = async (image: GalleryImage) => {
    if (!supabase) return;

    await supabase
      .storage
      .from('showcase-gallery')
      .remove([image.image_path]);

    const { error } = await supabase
      .from('gallery_images')
      .delete()
      .eq('id', image.id);

    if (!error) {
      await loadPendingImages();
    }
  };

  useEffect(() => {
    if (!supabase) return;

    supabase.auth.getUser().then(({ data }) => {
      setUser(data.user ?? null);
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  useEffect(() => {
    loadApprovedImages();
  }, []);

  useEffect(() => {
    if (isAdmin) {
      loadPendingImages();
    }
  }, [isAdmin]);

  const projects = [
    {
      id: 1,
      title: 'Jungle Adventure Game',
      student: 'Sarah M.',
      age: 12,
      description: 'A platformer game where you help a monkey collect bananas while avoiding obstacles.',
      skills: ['Scratch', 'Game Design', 'Animation'],
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80'
    },
    {
      id: 2,
      title: 'Weather Dashboard',
      student: 'Michael L.',
      age: 15,
      description: 'Interactive web app that displays current weather and 5-day forecast for any city.',
      skills: ['HTML', 'CSS', 'JavaScript', 'API'],
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80'
    },
    {
      id: 3,
      title: 'Drawing Canvas App',
      student: 'Emma R.',
      age: 10,
      description: 'Digital art tool with color picker, brush sizes, and save functionality.',
      skills: ['JavaScript', 'HTML Canvas', 'UI Design'],
      image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=800&q=80'
    },
    {
      id: 4,
      title: 'Quiz Master',
      student: 'Jason T.',
      age: 13,
      description: 'Multiple choice quiz game with score tracking and different difficulty levels.',
      skills: ['Python', 'Logic', 'Data Structures'],
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&q=80'
    },
    {
      id: 5,
      title: 'Virtual Pet Simulator',
      student: 'Lily K.',
      age: 11,
      description: 'Take care of a virtual pet by feeding, playing, and keeping it happy!',
      skills: ['Scratch', 'Variables', 'User Input'],
      image: 'https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=800&q=80'
    },
    {
      id: 6,
      title: 'Personal Portfolio Website',
      student: 'David P.',
      age: 16,
      description: 'Responsive portfolio showcasing projects, skills, and contact information.',
      skills: ['HTML', 'CSS', 'Responsive Design'],
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80'
    }
  ];

  // Gallery images shown to the public (only approved items).
  const galleryImages = approvedImages.map((image) => ({
    src: image.image_url,
    alt: 'Approved student showcase photo'
  }));

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#E53935] to-[#1A237E] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-white mb-6">Student Showcase</h1>
          <p className="text-xl text-white/90">
            Celebrate the amazing projects created by our students. 
            These young coders are building the future!
          </p>
        </div>
      </section>

      {/* Filter Tags */}
      <section className="bg-white py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            <button className="px-4 py-2 bg-[#00BCD4] text-white rounded-full text-sm font-medium hover:bg-[#00ACC1] transition-colors">
              All Projects
            </button>
            <button className="px-4 py-2 bg-[#F5F3EE] text-[#1A237E] rounded-full text-sm font-medium hover:bg-[#E0DED8] transition-colors">
              Games
            </button>
            <button className="px-4 py-2 bg-[#F5F3EE] text-[#1A237E] rounded-full text-sm font-medium hover:bg-[#E0DED8] transition-colors">
              Websites
            </button>
            <button className="px-4 py-2 bg-[#F5F3EE] text-[#1A237E] rounded-full text-sm font-medium hover:bg-[#E0DED8] transition-colors">
              Apps
            </button>
            <button className="px-4 py-2 bg-[#F5F3EE] text-[#1A237E] rounded-full text-sm font-medium hover:bg-[#E0DED8] transition-colors">
              Art & Animation
            </button>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden bg-gray-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#00BCD4] text-white text-sm font-medium rounded-full">
                    Age {project.age}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-[#1A237E] mb-2">{project.title}</h3>
                  <p className="text-[#00BCD4] text-sm font-medium mb-3">By {project.student}</p>
                  <p className="text-[#1A237E]/70 text-sm mb-4">{project.description}</p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-[#F5F3EE] text-[#1A237E] text-xs rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* View Project Button */}
                  <button className="w-full py-2 bg-[#E53935] text-white rounded-lg font-medium hover:bg-[#D32F2F] transition-colors flex items-center justify-center gap-2">
                    View Project
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Student Gallery */}
      <section className="py-16 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-[#1A237E] mb-3">Student Showcase Gallery</h2>
              <p className="text-[#1A237E]/70 text-lg max-w-2xl">
                Upload photos from camps, showcases, and project demos. Admins approve photos before they appear publicly.
              </p>
            </div>
            <label className="inline-flex items-center justify-center px-6 py-3 bg-[#1A237E] text-white rounded-lg font-medium hover:bg-[#141A63] transition-colors cursor-pointer">
              Upload Photos
              <input
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={handleGalleryUpload}
              />
            </label>
          </div>

          {uploadStatus !== 'idle' && (
            <div className={`mb-8 rounded-lg px-4 py-3 text-sm font-medium ${uploadStatus === 'success' ? 'bg-green-100 text-green-800' : uploadStatus === 'error' ? 'bg-red-100 text-red-700' : 'bg-white text-[#1A237E]/80'}`}>
              {uploadMessage}
            </div>
          )}

          {supabase && !user && (
            <div className="bg-white rounded-xl p-6 shadow-sm mb-10">
              <h3 className="text-[#1A237E] mb-2">Admin Sign-in</h3>
              <p className="text-[#1A237E]/70 text-sm mb-4">
                Admins can sign in to approve gallery submissions.
              </p>
              <form onSubmit={handleAdminSignIn} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={authEmail}
                  onChange={(event) => setAuthEmail(event.target.value)}
                  placeholder="Admin email"
                  className="flex-1 rounded-lg border border-gray-200 px-4 py-2 text-sm"
                  required
                />
                <button
                  type="submit"
                  disabled={authLoading}
                  className="px-5 py-2 bg-[#E53935] text-white rounded-lg text-sm font-medium hover:bg-[#D32F2F] transition-colors disabled:opacity-60"
                >
                  {authLoading ? 'Sending...' : 'Send Sign-in Link'}
                </button>
              </form>
              {authMessage && <p className="text-green-700 text-sm mt-3">{authMessage}</p>}
              {authError && <p className="text-red-600 text-sm mt-3">{authError}</p>}
            </div>
          )}

          {user && (
            <div className="bg-white rounded-xl p-6 shadow-sm mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-sm text-[#1A237E]/70">Signed in as</p>
                <p className="text-[#1A237E] font-medium">{user.email}</p>
                {!isAdmin && (
                  <p className="text-sm text-[#E53935] mt-2">This account is not an admin.</p>
                )}
              </div>
              <button
                onClick={handleSignOut}
                className="px-4 py-2 rounded-lg border border-[#1A237E] text-[#1A237E] text-sm font-medium hover:bg-[#1A237E]/10 transition-colors"
              >
                Sign Out
              </button>
            </div>
          )}

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.length === 0 && (
              <div className="col-span-full bg-white rounded-xl p-8 text-center text-[#1A237E]/70">
                No approved photos yet. Check back soon!
              </div>
            )}
            {galleryImages.map((image, index) => (
              <div key={`${image.src}-${index}`} className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          {isAdmin && (
            <div className="mt-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[#1A237E]">Pending Approval</h3>
                <span className="text-sm text-[#1A237E]/70">{pendingImages.length} pending</span>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {pendingImages.length === 0 && (
                  <div className="col-span-full bg-white rounded-xl p-8 text-center text-[#1A237E]/70">
                    No pending submissions.
                  </div>
                )}
                {pendingImages.map((image) => (
                  <div key={image.id} className="bg-white rounded-xl overflow-hidden shadow-md">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={image.image_url}
                        alt="Pending student gallery submission"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 flex gap-3">
                      <button
                        onClick={() => handleApprove(image)}
                        className="flex-1 px-3 py-2 rounded-lg bg-[#00BCD4] text-white text-sm font-medium hover:bg-[#00ACC1] transition-colors"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => handleReject(image)}
                        className="flex-1 px-3 py-2 rounded-lg border border-[#E53935] text-[#E53935] text-sm font-medium hover:bg-[#E53935]/10 transition-colors"
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Submit Project CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#00BCD4] to-[#1A237E] rounded-2xl p-8 md:p-12 text-center text-white">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Trophy className="w-10 h-10" />
            </div>
            <h2 className="text-white mb-4">Built Something Amazing?</h2>
            <p className="text-xl text-white/90 mb-8">
              Share your project with the community! We'd love to feature your work in our showcase.
            </p>
            <button className="px-8 py-4 bg-white text-[#1A237E] rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Submit Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#F5F3EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00BCD4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-[#00BCD4]" />
              </div>
              <div className="text-3xl font-bold text-[#1A237E] mb-2">200+</div>
              <div className="text-[#1A237E]/70">Projects Created</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E53935]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-[#E53935]" />
              </div>
              <div className="text-3xl font-bold text-[#1A237E] mb-2">15+</div>
              <div className="text-[#1A237E]/70">Programming Languages</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#00BCD4]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="w-8 h-8 text-[#00BCD4]" />
              </div>
              <div className="text-3xl font-bold text-[#1A237E] mb-2">30+</div>
              <div className="text-[#1A237E]/70">Awards Won</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
