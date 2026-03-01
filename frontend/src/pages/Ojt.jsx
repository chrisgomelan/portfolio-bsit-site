import { documents } from "@/data/project";
import Dialog, { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { Folder, FileX } from "lucide-react";

function Ojt() {

    const [open, setOpen] = useState(false);
    const [selectedDoc, setSelectedDoc] = useState(null);

    const handleFileClick = (doc) => {
        setSelectedDoc(doc);
        setOpen(true);
    }

    const handleClose = (open) => {
        if(!open) {
            setOpen(false);
            setSelectedDoc(null);
        }
    }

    return (
        <section id="ojt" className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center">OJT Documentation</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {documents.map(doc => (
              <button
                key={doc.id}
                onClick={() => handleFileClick(doc)}
                className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-100 transition-all group"
              >
                <Folder className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-500 group-hover:text-yellow-600 transition-colors fill-yellow-400 group-hover:fill-yellow-500" />
                <span className="text-xs sm:text-sm font-medium text-gray-700 text-center leading-tight">{doc.name}</span>
                <span className="text-[10px] sm:text-xs text-gray-400 text-center leading-snug">{doc.description}</span>
              </button>
            ))}
        </div>
        {
            selectedDoc && (
                 <Dialog open={open} onOpenChange={handleClose}>
                    <DialogContent className="max-w-4xl w-[90vw]">
                    <DialogTitle>{selectedDoc.name}</DialogTitle>
                    <p className="text-sm text-gray-500 -mt-2">{selectedDoc.description}</p>
                    {selectedDoc.driveUrl && !selectedDoc.driveUrl.includes("YOUR_FILE_ID") ? (
                      <iframe
                        src={selectedDoc.driveUrl}
                        className="w-full h-[80vh] border-0 rounded"
                        title={selectedDoc.name}
                        allow="autoplay; encrypted-media"
                        allowFullScreen
                      />
                    ) : (
                      <div className="flex flex-col items-center justify-center h-[60vh] text-gray-400 gap-4">
                        <FileX className="w-16 h-16" />
                        <p className="text-lg font-medium">Document not yet available</p>
                        <p className="text-sm text-gray-400">{selectedDoc.fallbackMessage || "The file will be uploaded soon."}</p>
                      </div>
                    )}
                    </DialogContent>
                </Dialog>
            )
        }
            </section>
    )
}

export default Ojt;