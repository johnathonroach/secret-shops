<template>
  <span
    :class="CSSStyles"
    :style="iconColor"
    @click="generateName()"
    :width="width"
    :height="height"
    :title="title"
  ></span>
</template>

<style lang="scss">
.nameGenIcon{
    cursor: pointer;
    color: gray;
    top: 0.2em;
    position: relative;
    span::before{
      display:none;
    }
}
</style>

<script>
import "@mdi/font/css/materialdesignicons.css";
export default {
  data() {
    return {
      name: "",
      parts: []
    };
  },
  props: {
    color: {
      type: String,
      default: "gray"
    },
    icon: {
      type: String,
      default: "mdi-tag-plus"
    },
    width: {
      type: String,
      default: "15px"
    },
    height: {
      type: String,
      default: "15px"
    },
    files: {
      type: Array,
      default: function() {
        return ["./assets/adjectives", "./assets/names"];
      }
    },
    maxLength: {
      type: [Number, String],
      default: 30
    },
    noSpace: {
      type: Boolean,
      default: true
    },
    separator: {
      type: String,
      default: "-"
    },
    title: {
      type: String,
      default: "Click to generate a new name"
    }
  },
  computed: {
    CSSStyles() {
      return `nameGenIcon mdi ${this.icon}`;
    },
    iconColor() {
      return "color: " + this.color;
    }
  },
  mounted() {
    this.loadFiles();
  },
  methods: {
    generateName() {
      console.log("Name generation");
      this.name = "";
      for (var file in this.parts) {
        if (file !== "0") this.name += this.separator;
        var randomLine = Math.floor(
          Math.random() * Math.floor(this.parts[file].length)
        );
        this.name += this.returnName(this.parts[file][randomLine]);
      }
      console.log({ name: this.name });
      this.$emit("input", this.name.substring(0, this.maxLength));
    },
    async loadFiles() {
      for (var key in this.files) {
        var response = await fetch(this.files[key]);
        var text = await response.text();
        let lines = text.split("\n");
        this.parts[key] = [];
        for (var lineNumber in lines) this.parts[key].push(lines[lineNumber]);
      }
      console.log({ parts: this.parts });
    },
    returnName(line) {
      return this.noSpace
        ? line
            .toLowerCase()
            .trim()
            .replace(/\s/g, "")
        : this.parts[file][randomLine].toLowerCase().trim();
    }
  }
};
</script>