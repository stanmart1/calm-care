import React from 'react';
import Icon from 'components/AppIcon';

const LocationMap = () => {
  const officeLocation = {
    lat: 40.7128,
    lng: -74.0060,
    name: "CalmCare Counseling Office"
  };

  return (
    <div className="bg-card rounded-lg border border-border shadow-soft overflow-hidden">
      <div className="p-6 border-b border-border">
        <h2 className="text-2xl font-heading font-semibold text-foreground mb-2">
          Our Location
        </h2>
        <p className="text-muted-foreground font-body">
          Find us easily with our interactive map and detailed directions
        </p>
      </div>
      {/* Map Container */}
      <div className="relative h-80 md:h-96">
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          title={officeLocation?.name}
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps?q=${officeLocation?.lat},${officeLocation?.lng}&z=15&output=embed`}
          className="border-0"
        />
      </div>
      {/* Location Details */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Parking Information */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-3 flex items-center">
              <Icon name="Car" size={20} className="mr-2 text-primary" />
              Parking & Access
            </h3>
            <ul className="space-y-2 text-sm font-body text-muted-foreground">
              <li className="flex items-start">
                <Icon name="Check" size={16} className="mr-2 mt-0.5 text-success flex-shrink-0" />
                Free parking available in building garage
              </li>
              <li className="flex items-start">
                <Icon name="Check" size={16} className="mr-2 mt-0.5 text-success flex-shrink-0" />
                Wheelchair accessible entrance and elevators
              </li>
              <li className="flex items-start">
                <Icon name="Check" size={16} className="mr-2 mt-0.5 text-success flex-shrink-0" />
                Validation available for extended sessions
              </li>
              <li className="flex items-start">
                <Icon name="Check" size={16} className="mr-2 mt-0.5 text-success flex-shrink-0" />
                Street parking also available (metered)
              </li>
            </ul>
          </div>

          {/* Public Transportation */}
          <div>
            <h3 className="text-lg font-heading font-semibold text-foreground mb-3 flex items-center">
              <Icon name="Bus" size={20} className="mr-2 text-secondary" />
              Public Transportation
            </h3>
            <ul className="space-y-2 text-sm font-body text-muted-foreground">
              <li className="flex items-start">
                <Icon name="MapPin" size={16} className="mr-2 mt-0.5 text-secondary flex-shrink-0" />
                Metro Station: Wellness Center (0.3 miles)
              </li>
              <li className="flex items-start">
                <Icon name="MapPin" size={16} className="mr-2 mt-0.5 text-secondary flex-shrink-0" />
                Bus Routes: 15, 23, 45 (stop directly outside)
              </li>
              <li className="flex items-start">
                <Icon name="MapPin" size={16} className="mr-2 mt-0.5 text-secondary flex-shrink-0" />
                Bike racks available at building entrance
              </li>
              <li className="flex items-start">
                <Icon name="MapPin" size={16} className="mr-2 mt-0.5 text-secondary flex-shrink-0" />
                Rideshare pickup/drop-off zone available
              </li>
            </ul>
          </div>
        </div>

        {/* Directions Note */}
        <div className="mt-6 p-4 bg-accent/10 border border-accent/20 rounded-lg">
          <div className="flex items-start space-x-3">
            <Icon name="Navigation" size={20} className="text-accent mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-heading font-semibold text-foreground mb-1">
                Getting Here
              </h4>
              <p className="text-sm font-body text-muted-foreground">
                Our office is located on the 2nd floor of the Wellness Center building. 
                Use the main entrance and take the elevator to Suite 200. 
                Reception will be on your right as you exit the elevator.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;