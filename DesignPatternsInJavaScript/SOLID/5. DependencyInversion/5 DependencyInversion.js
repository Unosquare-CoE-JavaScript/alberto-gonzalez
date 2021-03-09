let Relationship = Object.freeze({
  parent: 0,
  child: 1,
  sibling: 2,
});

class Person {
  constructor(name) {
    this.name = name;
  }
}

// LOW LEVEL MODULE
class RelationshipBrowser {
  constructor() {
    if (this.constructor.name === "RelationshipBrowser")
      throw new Error("RelationshipBrowser is abstract!");
  }
  findAllChildrenOf(name) {}
}

class Relationships extends RelationshipBrowser {
  constructor() {
    super();
    this.data = [];
  }
  addPersonAndChild(parent, child) {
    this.data.push({
      from: parent,
      type: Relationship.parent,
      to: child,
    });
  }
  findAllChildrenOf(name) {
    return this.data
      .filter((r) => r.from.name === name && Relationship.type === r.parent)
      .map((r) => r.to);
  }
}

// HIGH-LEVEL MODULE
class Research {
  //   constructor(relationships) {
  //     // find all children of John
  //     let relations = relationships.data;
  //     for (const rel of relations.filter(
  //       (r) => r.from.name === "John" && r.type === Relationship.parent
  //     )) {
  //       console.log(`John has a child named ${rel.to.name}`);
  //     }
  //   }
  constructor(browser) {
    for (const p of browser.findAllChildrenOf("John")) {
      console.log(`John has a child called ${p.name}`);
    }
  }
}

let parent = new Person("John");
let child1 = new Person("Chris");
let child2 = new Person("Matt");

let rels = new Relationships();
rels.addPersonAndChild(parent, child1);
rels.addPersonAndChild(parent, child2);

new Research(rels);
