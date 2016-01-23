export default (date) => ({
  results: '',
  date,
  get() {
    return this.results;
  },
  Y(sep) {
    this.results += this.date.getFullYear();

    if (sep) {
      this.results += sep;
    }

    return this;
  },
  m(sep) {
    this.results += this.pad(this.date.getMonth() + 1);

    if (sep) {
      this.results += sep;
    }

    return this;
  },
  d(sep) {
    this.results += this.pad(this.date.getDate());

    if (sep) {
      this.results += sep;
    }

    return this;
  },
  H(sep) {
    this.results += this.pad(this.date.getHours());

    if (sep) {
      this.results += sep;
    }

    return this;
  },
  M(sep) {
    this.results += this.pad(this.date.getMinutes());

    if (sep) {
      this.results += sep;
    }

    return this;
  },
  S(sep) {
    this.results += this.pad(this.date.getSeconds());

    if (sep) {
      this.results += sep;
    }

    return this;
  },
  pad(val) {
    const doubleDigitsBegin = 10;

    return (val < doubleDigitsBegin) ? `0${val}` : val;
  }
});
