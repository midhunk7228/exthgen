import React, { useState, useEffect, useRef } from 'react';
import { AiOutlineClose } from "react-icons/ai";
import { IoMdAttach } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import { FiX } from "react-icons/fi";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FileInfo {
  name: string;
  size: number;
}

const ApplicationDialog: React.FC<DialogProps> = ({ isOpen, onClose }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedFile, setSelectedFile] = useState<FileInfo | null>(null);
  const [fileError, setFileError] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setIsAnimating(true);
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(onClose, 300);
  };

  const resetFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setSelectedFile(null);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setFileError('');
    
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setFileError('File size must be less than 5MB');
        resetFileInput();
        return;
      }
      
      setSelectedFile({
        name: file.name,
        size: file.size
      });
    }
  };

  const handleFileRemove = () => {
    resetFileInput();
    setFileError('');
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  if (!isOpen && !isAnimating) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 ${isAnimating ? 'animate-in fade-in duration-300' : 'animate-out fade-out duration-300'}`}>
      <div className="fixed inset-0 bg-black/40" onClick={handleClose} />
      
      <div className={`relative w-full max-w-lg bg-white rounded-2xl shadow-lg ${isAnimating ? 'animate-in zoom-in-95 duration-300' : 'animate-out zoom-out-95 duration-300'}`}>
        <button 
          onClick={handleClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
        >
          <AiOutlineClose className="text-gray-700 text-2xl border border-gray-700 rounded-full p-1"/>
        </button>

        {/* Dialog content */}
        <div className="py-6 px-9 space-y-4">
          <div className="flex justify-center">
            <img 
              src="../illustration.png"
              alt="Application"
              className="h-48 object-contain"
            />
          </div>

          <h2 className="text-2xl text-center text-gray-900 font-hedvig-serif">
            We See You, Not Your CV!
          </h2>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="First Name"
              className="w-full px-4 py-2 rounded-3xl border border-gray-300 placeholder:font-light placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-pink-300"
            />
            <input
              type="email"
              placeholder="E-Mail"
              className="w-full px-4 py-2 rounded-3xl border border-gray-300 placeholder:font-light placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-pink-300"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-2 rounded-3xl border border-gray-300 placeholder:font-light placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-pink-300"
            />

            <div className="space-y-2">
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center space-x-1 text-gray-600 font-extralight text-[16px] cursor-pointer hover:text-gray-800"
              >
                <IoMdAttach className="text-2xl"/>
                <span>Add your Attachment*</span>
              </div>
              
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.png,.jpeg,.jpg"
                className="hidden"
              />
              
              {selectedFile && (
                <div className="ml-6 mt-2 p-2 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-700 truncate">
                        {selectedFile.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {formatFileSize(selectedFile.size)}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={handleFileRemove}
                      className="ml-2 text-gray-400 hover:text-gray-600"
                    >
                      <FiX className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              )}
              
              {fileError && (
                <p className="text-red-500 text-xs pl-6">{fileError}</p>
              )}
              
              <div className="text-xs text-gray-500 font-extralight pl-6">
                Max 5 MB (Type pdf, doc, png, jpeg, docx)
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                className="h-7 w-7 rounded border-gray-100 text-pink-500 checked:bg-pink-500 checked:border-pink-500 focus:ring-pink-500"
              />
              <label className="text-xs font-extralight text-gray-500">
                I have read the privacy and policy and consent to the processing of my data for the purpose of handling my enquiry
              </label>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 px-6 text-white rounded-full bg-exthgen-gradient hover:from-pink-600 hover:to-orange-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
            >
              Submit <BsArrowRight className="text-lg"/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDialog;