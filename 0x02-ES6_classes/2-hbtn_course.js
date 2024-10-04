/* eslint-disable no-underscore-dangle */
export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    } else {
      this._name = newName;
    }
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    } else {
      this._length = newLength;
    }
  }

  set students(newStudents) {
    if (!(newStudents instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    } else if (newStudents.forEach((student) => typeof student !== 'string')) {
      throw new TypeError('Students must be an array of strings');
    } else {
      this._students = newStudents;
    }
  }
}
