/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get _name() {
    return this._name;
  }

  get _length() {
    return this._length;
  }

  get _students() {
    return this._students;
  }

  set _name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  set _length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  set _students(newStudents) {
    if (!(newStudents instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    }
    if (newStudents.forEach((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = newStudents;
  }
}
