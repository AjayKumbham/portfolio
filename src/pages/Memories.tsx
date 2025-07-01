
import React, { useState } from 'react';
import { memoriesData } from '../data/memories';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Play, Image as ImageIcon } from 'lucide-react';

const Memories: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<any>(null);

  const MediaItem: React.FC<{ media: any, onClick?: () => void }> = ({ media, onClick }) => (
    <div className="relative cursor-pointer group" onClick={onClick}>
      {media.type === 'image' ? (
        <img
          src={media.url}
          alt={media.alt}
          className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
        />
      ) : (
        <div className="relative">
          <img
            src={media.thumbnail}
            alt={media.alt}
            className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30 rounded-lg">
            <Play className="w-12 h-12 text-white" fill="white" />
          </div>
        </div>
      )}
      <div className="absolute top-2 right-2">
        <div className="bg-black bg-opacity-50 rounded-full p-1">
          {media.type === 'image' ? (
            <ImageIcon className="w-4 h-4 text-white" />
          ) : (
            <Play className="w-4 h-4 text-white" />
          )}
        </div>
      </div>
    </div>
  );

  const MemoryCard: React.FC<{ memory: any }> = ({ memory }) => (
    <div className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden hover:transform hover:scale-105">
      {/* Media Carousel */}
      <div className="relative overflow-hidden">
        {memory.media && memory.media.length > 1 ? (
          <Carousel className="w-full">
            <CarouselContent>
              {memory.media.map((media: any, index: number) => (
                <CarouselItem key={index}>
                  <MediaItem 
                    media={media} 
                    onClick={() => setSelectedMedia(media)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        ) : memory.media && memory.media.length === 1 ? (
          <MediaItem 
            media={memory.media[0]} 
            onClick={() => setSelectedMedia(memory.media[0])}
          />
        ) : (
          <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            <span className="text-gray-500">No media</span>
          </div>
        )}
        
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            memory.type === 'achievement' ? 'bg-yellow-100 text-yellow-800' :
            memory.type === 'speaking' ? 'bg-blue-100 text-blue-800' :
            'bg-green-100 text-green-800'
          }`}>
            {memory.type}
          </span>
        </div>

        {memory.media && memory.media.length > 1 && (
          <div className="absolute bottom-4 left-4">
            <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs">
              {memory.media.length} items
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
            {memory.title}
          </h3>
          <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2">
            {memory.date}
          </span>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {memory.description}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Memories</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Personal moments, achievements, and experiences that make my journey special
          </p>
        </div>

        {/* Memories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {memoriesData.map((memory) => (
            <MemoryCard key={memory.id} memory={memory} />
          ))}
        </div>

        {/* Quote Section */}
        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-12">
          <blockquote className="text-2xl font-light text-gray-900 dark:text-white italic mb-4">
            "Every moment is a fresh beginning."
          </blockquote>
          <p className="text-gray-600 dark:text-gray-400">
            These memories remind me of the incredible journey and the amazing people I've met along the way.
          </p>
        </div>
      </div>

      {/* Media Modal */}
      <Dialog open={!!selectedMedia} onOpenChange={() => setSelectedMedia(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] p-0">
          {selectedMedia && (
            <div className="relative">
              {selectedMedia.type === 'image' ? (
                <img
                  src={selectedMedia.url}
                  alt={selectedMedia.alt}
                  className="w-full h-auto max-h-[80vh] object-contain"
                />
              ) : (
                <video
                  src={selectedMedia.url}
                  controls
                  className="w-full h-auto max-h-[80vh]"
                  poster={selectedMedia.thumbnail}
                >
                  Your browser does not support the video tag.
                </video>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                <p className="text-white text-sm">{selectedMedia.alt}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Memories;
