module.exports = (grunt) => {
  grunt.loadNpmTasks('grunt-run');

  grunt.initConfig({
    run: {
      install: {
        exec: 'npm i',
      },
      run_lint: {
        exec: 'npm run lint',
      },
      run_lint_fix: {
        exec: 'npm run lint-fix',
      },
      run_test: {
        exec: 'npm test',
      },
      run_test_watch: {
        exec: 'npm test -- --watch',
      },
      run_android: {
        exec: 'npm run android',
      },
      run_ios: {
        exec: 'npm run ios',
      },
      run_server: {
        exec: 'npm start',
      },
    },
  });

  grunt.registerTask('default', 'default tasks', () => {
    grunt.task.run('run:install', 'test');
  });
  grunt.registerTask('android', ['run:install', 'run:run_android']);
  grunt.registerTask('ios', ['run:install', 'run:run_ios']);
  grunt.registerTask('server', ['run:install', 'run:run_server']);
  grunt.registerTask('test', ['run:run_lint', 'run:run_test_watch']);
  grunt.registerTask('lint-fix', ['run:run_lint_fix']);
};
