import Ember from 'ember';

const communityPropertTypes = [
  'Condo',
  'Townhouse',
  'Apartment'
];

export function rentalPropertyType([propertyType]) {
  if (communityPropertTypes.includes(propertyType)){
    return 'Community';
  }
  return 'Standalone';
}

export default Ember.Helper.helper(rentalPropertyType);
