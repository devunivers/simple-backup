'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (date) {
  return {
    results: '',
    date: date,
    get: function get() {
      return this.results;
    },
    Y: function Y(sep) {
      this.results += this.date.getFullYear();

      if (sep) {
        this.results += sep;
      }

      return this;
    },
    m: function m(sep) {
      this.results += this.pad(this.date.getMonth() + 1);

      if (sep) {
        this.results += sep;
      }

      return this;
    },
    d: function d(sep) {
      this.results += this.pad(this.date.getDate());

      if (sep) {
        this.results += sep;
      }

      return this;
    },
    H: function H(sep) {
      this.results += this.pad(this.date.getHours());

      if (sep) {
        this.results += sep;
      }

      return this;
    },
    M: function M(sep) {
      this.results += this.pad(this.date.getMinutes());

      if (sep) {
        this.results += sep;
      }

      return this;
    },
    S: function S(sep) {
      this.results += this.pad(this.date.getSeconds());

      if (sep) {
        this.results += sep;
      }

      return this;
    },
    pad: function pad(val) {
      var doubleDigitsBegin = 10;

      return val < doubleDigitsBegin ? '0' + val : val;
    }
  };
};