module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-run');

  grunt.initConfig({
    run: {
      options: {
        // ...
      },
      install: {
        exec: 'npm i'
      },
      run_test: {
        exec: 'npm test'
      },
      run_android: {
        exec: 'npm run android'
      },
      run_ios: {
        exec: 'npm run ios'
      },
      run_server: {
        exec: 'npm start'
      }
    }
  });

  grunt.registerTask('default', ['run:install', 'run:run_test']);
  grunt.registerTask('android', ['run:install', 'run:run_android']);
  grunt.registerTask('ios', ['run:install', 'run:run_ios']);
  grunt.registerTask('server', ['run:install', 'run:run_server']);
};
