import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { DialogDescription } from "@radix-ui/react-dialog";

export const ResumeViewer = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Resume</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-4xl w-full max-h-[90vh] p-4 md:p-6 rounded-lg overflow-y-hidden">
                <DialogHeader>
                    <DialogTitle className="text-xl font-semibold">
                        Resume
                    </DialogTitle>
                    <DialogDescription>
                        <a href="/resume.pdf" target="_blank">
                            <Button>View Full Page</Button>
                        </a>
                    </DialogDescription>
                </DialogHeader>
                <div className="relative w-full h-[80vh] rounded-lg overflow-hidden border border-gray-200 shadow-lg mt-4">
                    <iframe
                        src="/resume.pdf"
                        className="w-full h-full rounded-lg overflow-y-auto"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};
