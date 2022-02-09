class CURD {
    constructor(key = null, value = null) {
        if (key && value) {
            this[key] = value;
        }
    }

    create(key, value) {
        if (this.hasOwnProperty(key)) {
            return "Key already exists";
        }

        this[key] = value;

        return {
            key: value
        }
    }

    reads() {
        return this;
    }

    read(key) {
        if (!this.hasOwnProperty(key)) {
            return "Key does not exist";
        }

        return {
            key: this[key]
        }
    }

    update(key, value) {
        if (!this.hasOwnProperty(key)) {
            return "Key does not exist";
        }

        this[key] = value;

        return {
            key: value
        }
    }

    delete(key) {
        if (!this.hasOwnProperty(key)) {
            return "Key does not exist";
        }

        delete this[key];

        return "Key deleted";
    }
}

const object = new CURD();

object.create("name", "John");
object.create("age", "20");

console.log(object.reads());

console.log(object.read("name"));
console.log(object.read("age"));
console.log(object.read("address"));

console.log(object.update("age", "21"));

console.log(object.delete("age"));

console.log(object.reads());