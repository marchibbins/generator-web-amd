var generators = require('yeoman-generator');

module.exports = generators.Base.extend({
    writing: function () {
        this.directory(
            this.templatePath(),
            this.destinationPath()
        );
    },
    install: function () {
        this.npmInstall();
    },
    end: function () {
        this.fs.copy(
            this.destinationPath('node_modules/almond/almond.js'),
            this.destinationPath('scripts/almond.js')
        );
    }
});
