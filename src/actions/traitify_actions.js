export const GET_USER_TRAITIFY = 'GET_USER_TRAITIFY';
export function getUserTraitify(traitifyObj) {
  return {
    type: GET_USER_TRAITIFY,
    traitifyObj: traitifyObj
  }
}