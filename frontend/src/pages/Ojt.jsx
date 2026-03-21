import { documents, internshipPresentation } from "@/data/project";
import Dialog, { DialogContent, DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import { Folder, FileX, ArrowLeft, PlayCircle, CheckCircle2 } from "lucide-react";
import { FadeInOnScroll } from "@/components/ui/fade-in-on-scroll";

function Ojt() {

  const [open, setOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [selectedWeek, setSelectedWeek] = useState(null);

  const handleFileClick = (doc) => {
    setSelectedDoc(doc);
    setOpen(true);
    setSelectedWeek(null);
  }

  const handleClose = (open) => {
    if (!open) {
      setOpen(false);
      setSelectedDoc(null);
      setSelectedWeek(null);
    }
  }

  const handleWeekClick = (week) => {
    if (week.driveUrl) {
      setSelectedWeek(week);
    }
  }

  const handleBackToOverview = () => {
    setSelectedWeek(null);
  }

  return (
    <section id="ojt" className="max-w-6xl mx-auto px-4 py-20">
      <FadeInOnScroll>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center uppercase tracking-tighter">OJT Documentation</h2>
      </FadeInOnScroll>

      {/* Featured Presentation Video */}
      <FadeInOnScroll delay={0.1}>
        <div className="mb-12 sm:mb-20 bg-white rounded-[2rem] p-4 sm:p-8 shadow-2xl shadow-gray-200 border border-gray-100 flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
          <div className="w-full lg:w-[60%] flex flex-col gap-4">
            <div className="flex items-center gap-3 mb-2 px-1">
              <PlayCircle className="text-blue-600 w-6 h-6 animate-pulse" />
              <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight">{internshipPresentation.title}</h3>
            </div>
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl shadow-xl bg-gray-900 ring-4 ring-gray-100/50 group">
              <iframe
                src={internshipPresentation.videoUrl}
                className="absolute inset-0 w-full h-full border-0"
                title={internshipPresentation.title}
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="w-full lg:w-[40%] flex">
            <div className="bg-gray-50/80 rounded-2xl p-6 sm:p-8 border border-gray-100 flex flex-col justify-center w-full">
              <div className="mb-6">

                <p className="text-sm text-gray-500 mt-4 font-bold leading-relaxed">
                  {internshipPresentation.description}
                </p>
              </div>

              <div className="space-y-4">
                {internshipPresentation.highlights.map((point, index) => (
                  <div key={index} className="flex items-center gap-4 group">
                    <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 border border-gray-100 group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </div>
                    <span className="text-sm font-black text-gray-700 uppercase tracking-tight">{point}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.2}>
        <div className="flex items-center gap-3 mb-8 px-2">
          <Folder className="w-5 h-5 text-yellow-500 fill-yellow-400" />
          <h4 className="text-sm font-black uppercase tracking-[0.3em] text-gray-400">Supporting Records</h4>
          <div className="h-[1px] flex-grow bg-gray-100"></div>
        </div>
      </FadeInOnScroll>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
        {documents.map((doc, index) => (
          <FadeInOnScroll key={doc.id} delay={index * 0.08} direction="up">
            <button
              onClick={() => handleFileClick(doc)}
              className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-gray-100 transition-all group w-full"
            >
              <Folder className="w-12 h-12 sm:w-16 sm:h-16 text-yellow-500 group-hover:text-yellow-600 transition-colors fill-yellow-400 group-hover:fill-yellow-500" />
              <span className="text-xs sm:text-sm font-medium text-gray-700 text-center leading-tight">{doc.name}</span>
              <span className="text-[10px] sm:text-xs text-gray-400 text-center leading-snug">{doc.description}</span>
            </button>
          </FadeInOnScroll>
        ))}
      </div>
      {
        selectedDoc && (
          <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="max-w-4xl w-[95vw] sm:w-[90vw]">
              <div className="flex items-center gap-3">
                {selectedWeek && (
                  <button
                    onClick={handleBackToOverview}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                  >
                    <ArrowLeft className="w-5 h-5 text-gray-600" />
                  </button>
                )}
                <div>
                  <DialogTitle>{selectedWeek ? `Week ${selectedWeek.week} - ${selectedDoc.name}` : selectedDoc.name}</DialogTitle>
                  <p className="text-sm text-gray-500">{selectedWeek ? `Viewing report for Week ${selectedWeek.week}` : selectedDoc.description}</p>
                </div>
              </div>

              {selectedDoc.weeks && !selectedWeek ? (
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 max-h-[70vh] overflow-y-auto">
                  {selectedDoc.weeks.map((week) => (
                    <div
                      key={week.week}
                      onClick={() => handleWeekClick(week)}
                      className={`flex flex-col items-center p-4 border rounded-lg transition-all bg-gray-50/50 ${week.driveUrl ? "hover:border-yellow-500 cursor-pointer shadow-sm" : "opacity-75"
                        }`}
                    >
                      <span className="text-lg font-bold text-gray-700">Week {week.week}</span>
                      <span className={`text-[10px] mt-1 px-2 py-0.5 rounded-full ${week.status === "Completed" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                        }`}>
                        {week.status}
                      </span>
                      {week.driveUrl ? (
                        <span className="mt-3 text-xs text-blue-600 font-medium">View Preview</span>
                      ) : (
                        <span className="mt-3 text-[10px] text-gray-400 italic">Not yet available</span>
                      )}
                    </div>
                  ))}
                </div>
              ) : selectedWeek || (selectedDoc.driveUrl && !selectedDoc.driveUrl.includes("YOUR_FILE_ID")) ? (
                <iframe
                  src={selectedWeek ? selectedWeek.driveUrl : selectedDoc.driveUrl}
                  className="w-full h-[75vh] border-0 rounded"
                  title={selectedWeek ? `Week ${selectedWeek.week}` : selectedDoc.name}
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