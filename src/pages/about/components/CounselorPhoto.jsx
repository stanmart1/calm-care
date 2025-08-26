import React from 'react';
import AppImage from 'components/AppImage';
import Icon from 'components/AppIcon';

const CounselorPhoto = () => {
  return (
    <div className="relative max-w-md mx-auto">
      <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-success/10 border-4 border-card shadow-2xl">
        <AppImage
          src="/assets/images/counselor-headshot.jpg"
          alt="Dr. Sarah Chen - Licensed Clinical Social Worker"
          className="w-full h-full object-cover"
          fallbackSrc="/assets/images/no_image.png"
        />
      </div>
      
      {/* Professional Badge */}
      <div className="absolute -bottom-4 -right-4 bg-card border-4 border-background rounded-full p-3 shadow-lg">
        <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full">
          <Icon name="Award" size={24} color="white" />
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-4 -left-4 w-8 h-8 bg-success/20 rounded-full blur-sm"></div>
      <div className="absolute top-1/4 -right-8 w-6 h-6 bg-primary/20 rounded-full blur-sm"></div>
      <div className="absolute bottom-1/4 -left-6 w-4 h-4 bg-success/30 rounded-full blur-sm"></div>
    </div>
  );
};

export default CounselorPhoto;