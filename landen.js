// landen.js

var data = require('./landen.min.json'); // or landen.json

var Landen = module.exports = function(arg) {
  if (!(this instanceof Landen))
    return new Landen(arg);

  this._arg = arg.toUpperCase();
  this._data = {};
  this._exists = this.exists( arg );
  this._name = {};
  this._code = {};

};

Landen.prototype = {

  exists : function(arg) {

    if ( data[this._arg] === undefined || data[this._arg] === 'undefined' )
      this._exists = false;
    else
      this._exists = true;

    this._data = data[this._arg];

    return this;
  },

  name : function(t, l) { // type, length

    if ( this.exists(this._arg) ) {

      this._name.conventional = this._data.name.conventional;
      this._name.local = this._data.name.local;

      if ( t === undefined && l === undefined ) {
        this._name = this._data.name;
      }
      else if ( t === 'conventional' || t === 'c' ) {
        if ( l === 'long' || l === 'l' ) {
          this._name = this._data.name.conventional.long;
        }
        else if ( l === 'short' || l === 's' ) {
          this._name = this._data.name.conventional.short;
        }
        else {
          this._name = this._data.name.conventional;
        }
      }
      else if ( t === 'local' || t === 'l' ) {
        if ( l === 'long' || l === 'l' ) {
          this._name = this._data.name.local.long;
        }
        else if ( l === 'short' || l === 's' ) {
          this._name = this._data.name.local.short;
        }
        else {
          this._name = this._data.name.local;
        }
      }
      else if ( t === 'former' || t === 'f' ) {
        this._name = this._data.name.former;
      }
      else if ( t === 'abbreviation' || t === 'a' ) {
        this._name = this._data.name.abbreviation;
      }
      else {
        this._name = null;
      }
    }

    return this._name;
  },

  code : function(t) { // type
    
    if ( this.exists(this._arg) ) {

      this._code = this._data.code;

      if ( t === undefined ) {
        this._code = this._data.code;
      }
      else if ( t === 'alpha2' || t === 'a2' ) { // ISO 3166-1 alpha-2
        this._code = this._data.code.alpha2;
      }
      else if ( t === 'alpha3' || t === 'a3' ) { // ISO 3166-1 alpha-3
        this._code = this._data.code.alpha3;
      }
      else if ( t === 'numeric' || t === 'n' ) { // ISO 3166-1 numeric
        this._code = parseInt( this._data.code.numeric );
      }
      else if ( t === 'fips' || t === 'f' ) { // Federal Information Processing Standards
        this._code = this._data.code.fips;
      }
      else if ( t === 'ioc' || t === 'i' ) { // International Olympic Committee
        this._code = this._data.code.ioc;
      }
      else {
        this._code = null;
      }
    }

    return this._code;

  }

};
