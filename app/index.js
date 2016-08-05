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
        this.spawnCommand('npm', ['run', 'gulp']);
    }
});
