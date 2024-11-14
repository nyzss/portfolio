import { ReactNode } from "react";

export const TechTag = ({ children }: { children: ReactNode }) => {
    return (
        <span className="inline-block bg-cyan-500 bg-opacity-30 px-3 py-1.5 text-xs font-medium text-cyan-500 mr-2 mb-2 rounded-full hover:bg-cyan-200 hover:bg-opacity-30">
            {children}
        </span>
    );
};
