var explorerDataEn = {
    'script': {
        'option_text': 'Add a script',
        'action_text': 'I need to add a: ',
        'selector_id': 'sel-script',
        'data': {
            'script': {
                'name': 'script',
                'link_name': 'script',
                'option_text': 'script',
                'desc': 'A shell script command that is executed by the Runner. To execute multiple commands, list out the commands in an array. If a command returns a non-zero exit code, the job fails and further commands will not be executed.<br><br>Interesting Fact: This is the only required keyword that a job needs.',
                'text': "job:<br>  script:<br>    - uname -a<br>    - bundle exec rspec"
            },
            'before_script': {
                'name': 'before_script',
                'link_name': 'before_script',
                'option_text': 'script before running a job',
                'desc': 'Used to define commands that should run before each job. The commands are executed only after the artifacts are available and prior to the main script execution.<br><br>Interesting Fact: before_script and script share the same shell instance.',
                'text': "default:<br>  before_script:<br>    - echo \"global before script\"<br><br>job:<br>  before_script:<br>    - echo \"overwrites global before script\"<br>  script:<br>    - echo \"Hello World\""
            },
            'after_script': {
                'name': 'after_script',
                'link_name': 'after_script',
                'option_text': 'script after running a job',
                'desc': 'Used to define commands that should run after each job. It is important to note that after_script is executed regardless of whether the job passed or failed.<br><br>Interesting Fact: after_script is executed in a new shell instance and have no affect on the job\'s exit code.',
                'text': "default:<br>  after_script:<br>    - echo \"global after script\"<br><br>job:<br>  script:<br>    - echo \"Hello World\"<br>  after_script:<br>    - echo \"overwrites global after script\"<br>"
            }
        }
    }
};

var explorerData = {
    'en': explorerDataEn
}