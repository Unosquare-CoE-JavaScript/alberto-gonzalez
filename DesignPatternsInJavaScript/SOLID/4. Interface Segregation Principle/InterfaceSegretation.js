class Document {}

class Machine {
  constructor() {
    if (this.constructor.name === "Machine")
      throw new Error("Machine is abstract!");
  }

  print(doc) {}
  fax(doc) {}
  scan(doc) {}
}

class MultiFunctionPrinter extends Machine {
  print(doc) {
    super.print(doc);
  }
  fax(doc) {
    super.fax(doc);
  }
  scan(doc) {
    super.scan(doc);
  }
}

class NotImplementedError extends Error {
  constructor(name) {
    let msg = `${name} is not implemented!`;
    super(m);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotImplementedError);
    }
  }
}

class OldFassionedprinter extends Machine {
  print(doc) {
    // ok
  }
  fax(doc) {
    // do nothing
    // Principe of least surprise
  }
  scan(doc) {
    //
    throw new NotImplementedError("OldFasionedPrinter.scan");
  }
}

class Printer {
  constructor() {
    if (this.constructor.name === "Machine")
      throw new Error("Machine is abstract!");
  }
  print() {}
}

class Scanner {
  constructor() {
    if (this.constructor.name === "Machine")
      throw new Error("Machine is abstract!");
  }
  scan() {}
}

class PhotocopierNoExtends {
  print() {}
  scan() {}
}

let printer = new OldFassionedprinter();
printer.scan();
