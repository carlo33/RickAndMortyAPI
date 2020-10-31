const getHash = ()=> {
  console.log('dato de entrada getHash:',location.hash);
  return location.hash.slice(1).toLocaleLowerCase().split('/')[1]||'/';
}
export default getHash;