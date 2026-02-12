import { CheckCircle } from 'lucide-react';

interface UserStoryCardProps {
  story: string;
  acceptanceCriteria: string[];
  navArea: string;
}

export function UserStoryCard({ story, acceptanceCriteria, navArea }: UserStoryCardProps) {
  return (
    <div className="bg-white rounded-lg border border-[#1A237E]/10 p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">
        <span className="inline-block px-3 py-1 bg-[#00BCD4] text-white rounded-full text-sm font-medium mb-3">
          {navArea}
        </span>
        <p className="text-[#1A237E] italic">"{story}"</p>
      </div>

      <div>
        <h4 className="font-medium text-[#1A237E] mb-3">Acceptance Criteria:</h4>
        <ul className="space-y-2">
          {acceptanceCriteria.map((criterion, index) => (
            <li key={index} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-[#00BCD4] flex-shrink-0 mt-0.5" />
              <span className="text-[#1A237E]/80">{criterion}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}