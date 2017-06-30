import { map, __, memoize, curry } from 'ramda';
import { isFSA } from 'flux-standard-action';


export const actionWithMeta = (fn, dispatch) => {
  fn._meta = {};
  fn.addMeta = function(meta) {
    if (typeof meta !== 'object') throw new Error('meta must be an object');
    if(!this._originalFunction) {
      this._originalFunction = this;
      this._originalFunction._meta = {};
    }
    this._originalFunction._meta = {...this._originalFunction._meta, ...meta}
    
    
    const wrapped = (...params) => {
      const result = this(...params);
      result.meta = {...this._meta,...meta};
      dispatch(result);
    }
    
    wrapped.addMeta = this.addMeta;
    wrapped._originalFunction = this._originalFunction;
    wrapped._meta = this._originalFunction._meta;
  
    return wrapped;
  }
  
  return fn;
}


export const actionsWithMeta = (name, actions) => ({
  [name]: meta => {
    console.log(name, meta)
    return map(
      action => actionWithMeta(name, action)(meta),
      actions
    );
  }
});



// actions.withMeta({ list: 'users' }).addUser()
// export const addMetaCreators = (obj) => {
//   obj.withMeta = (meta) => {
//     if (typeof meta !== 'object') throw new Error('meta must be an object');
//     if (Object.keys(meta) > 1) throw new Error('only objects with one key are supported');
//     const metakey = Object.keys(meta)[0];
//     const metaVal = meta[metakey];
//     return map(o => (...args) => actionWithMeta(metakey, 0)(metaVal)(...args), obj);
//   }
//   return obj;
// }
