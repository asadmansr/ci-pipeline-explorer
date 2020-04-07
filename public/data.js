/** Content for Script */
const scriptDesc = "A shell script command that is executed by the Runner. To execute multiple commands, list out the commands in an array. If a command returns a non-zero exit code, the job fails and further commands will not be executed." +
    "<br><br>" +
    "Interesting Fact: This is the only required keyword that a job needs.";

const scriptText = "job:<br>" +
    "  script:<br>" +
    "    - uname -a <br>" +
    "    - bundle exec rspec";

const beforeScriptDesc = "Used to define commands that should run before each job. The commands are executed only after the artifacts are available and prior to the main script execution." +
    "<br><br>" +
    "Interesting Fact: before_script and script share the same shell instance."

const beforeScriptText = "default:<br>" +
    "  before_script:<br>" +
    "    - echo \"global before script\"<br><br>" +
    "  job:<br>" +
    "    before_script:<br>" +
    "      - echo \"overwrites global before script\"<br>" +
    "    script:<br>" +
    "      - echo \"Hello World\"";

const afterScriptDesc = "Used to define commands that should run after each job. It is important to note that after_script is executed regardless of whether the job passed or failed." +
    "<br><br>" +
    "Interesting Fact: after_script is executed in a new shell instance and have no affect on the job\'s exit code.";

const afterScriptText = "default:<br>" +
    "  after_script:<br>" +
    "    - echo \"global after script\"<br><br>" +
    "  job:<br>" +
    "    script:<br>" +
    "      - echo \"Hello World\"<br>" +
    "    after_script:<br>" +
    "      - echo \"overwrites global after script\"<br>";
/** */


/** Content for Image */
const imageDesc = "Used to specify the docker image needed to run the job. It is also possible to define different images per job.";

const imageText = "image: ruby:2.5<br><br>" +
    "test:2.6:<br>" +
    "  image: ruby:2.6<br>" +
    "  script:<br>" +
    "    - bundle exec rake spec<br>" +
    "<br>" +
    "test:2.7:<br>" +
    "  image: ruby:2.7<br>" +
    "  script:<br>" +
    "    - bundle exec rake spec";
/** */


/** Content for Stages */
const globalStageDesc = "Used to define global stages that can be used by jobs. Jobs in same stage are executed in parallel and jobs of the next stage wait for current stage to complete successfully." +
    "<br><br>" +
    "Interesting Fact: ordering of elements in stages define the ordering of the jobs to be executed.";
const globalStageText = "stages:<br>" +
    "  - build<br>" +
    "  - test<br>" +
    "  - deploy";

const prePostStageDesc = "Used to define .pre and .post stages that are guaranteed to run as first and last stage in a pipeline respectively.";
const prePostStageText = "pre:job:<br>" +
    "  stage: .pre<br>" +
    "  script: echo \"prepare stage prior to build stage\"<br>" +
    "<br>" +
    "build:job:<br>" +
    "  stage: build<br>" +
    "  script: echo \"execute build job\"<br>" +
    "<br>" +
    "post:job:<br>" +
    "  stage: .post<br>" +
    "  script: echo \"post stage after build stage\"";

const stageDesc = "Used to group jobs with specific stages defined globally. Jobs that are of the same stage are executed in parallel.";
const stageText = "build:job:<br>" +
    "  stage: build<br>" +
    "  script: ./gradle build<br>" +
    "<br>" +
    "test:job:<br>" +
    "  stage: build<br>" +
    "  script: ./gradle test<br>" +
    "<br>" +
    "deploy:job:<br>" +
    "  stage: deploy<br>" +
    "  script: ./gradle deploy";
/** */

/** Content for When */
const onlyExceptDesc = "Only and except define when a job should be created. Only defines the names of branches and tags for which a job will be executed. Except defines the name of branches or tags for which a job will not be executed.";
const onlyExceptText = "job:<br>" +
    "  only:<br>" +
    "    - branches<br>" +
    "  except:<br>" +
    "    - master";

//const whenDesc = "When defines whether a job should be executed or not based on various conditions. When can be used to run a particular job whether the previous stages have passed or not. In addition, it can specify manual or delayed-timed jobs in the pipeline.";
const whenDesc = "When defines whether a job should be executed or not based on various conditions:<br>" +
    "<li>on_success - default state of executing a job if previous stage has passed<br>" +
    "<li>on_failure - execute if at least one job from previous stage has failed<br>" +
    "<li>always - execute the job regardless of status of previous stage<br>" +
    "<li>manual - execute the job manually from the UI<br>" +
    "<li>delayed - execute job after a certain period of time<br>";

const whenText = "job0:<br>" +
    "  when: on_failure <br>" +
    "<br>" +
    "job1:<br>" +
    "  when: always <br>" +
    "<br>" +
    "job2:<br>" +
    "  when: manual";

const retryDesc = "Retry will automatically re-run the job for the number of times specified if a failure has occurred. For advanced usage, retry can be configured by maximum number of retries along with a specific failure condition.";
const retryText = "test:<br>" +
    "  script: run tests<br>" +
    "  retry: 2 # job will be retried two more times if failed<br>" +
    "<br>" +
    "ui-test:<br>" +
    "  script: run ui-tests<br>" +
    "  retry:<br>" +
    "    max: 2<br>" +
    "    when: runner_system_failure";

/** Content for Artifacts */
const artifactsDesc = "Artifacts are list of files or directories that will be saved to a particular job in the pipeline which can be downloaded through the UI or used in different stages of the pipeline.";
const artifactsText = "artifacts:<br>" +
    "  paths:<br>" +
    "    - app/build<br>" +
    "    - build/report.xml<br>" +
    "  expire_in: 2 hrs";

const dependenciesDesc = "Dependencies define a list jobs that have been executed to fetch artifacts from. By default, all artifacts from previous stages are passed automatically. If the artifacts are expired, the dependent job will fail.";
const dependenciesText = "build:app:<br>" +
    "  stage: build<br>" +
    "  script: make<br>" +
    "  artifacts:<br>" +
    "    paths<br>" +
    "      - app/build<br>" +
    "<br>" +
    "deploy:app:<br>" +
    "  stage: deploy<br>" +
    "  dependencies:<br>" +
    "    - build:app<br>" +
    "  script: deploy";

/** Content for explorer object */
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
                'desc': scriptDesc,
                'text': scriptText
            },
            'before_script': {
                'name': 'before_script',
                'link_name': 'before_script',
                'option_text': 'script before running a job',
                'desc': beforeScriptDesc,
                'text': beforeScriptText
            },
            'after_script': {
                'name': 'after_script',
                'link_name': 'after_script',
                'option_text': 'script after running a job',
                'desc': afterScriptDesc,
                'text': afterScriptText
            }
        }
    },
    'image': {
        'option_text': 'Configure image',
        'action_text': 'I need to add a: ',
        'selector_id': 'sel-image',
        'data': {
            'image': {
                'name': 'image',
                'link_name': 'image',
                'option_text': 'image',
                'desc': imageDesc,
                'text': imageText
            }
        }
    },
    'stage': {
        'option_text': 'Assign stages',
        'action_text': 'I need to specify: ',
        'selector_id': 'sel-stage',
        'data': {
            'global_stage': {
                'name': 'global stage',
                'link_name': 'global_stage',
                'option_text': 'global stage',
                'desc': globalStageDesc,
                'text': globalStageText
            },
            'stage': {
                'name': 'stage',
                'link_name': 'stage',
                'option_text': 'stage',
                'desc': stageDesc,
                'text': stageText
            },
            'pre_post_stage': {
                'name': 'pre and post stages',
                'link_name': 'pre_post_stage',
                'option_text': 'pre and post stages',
                'desc': prePostStageDesc,
                'text': prePostStageText
            }
        }
    },
    'when': {
        'option_text': 'Specify when to run',
        'action_text': 'I need to specify: ',
        'selector_id': 'sel-when',
        'data': {
            'only_except': {
                'name': 'only and except',
                'link_name': 'only_except',
                'option_text': 'only and except',
                'desc': onlyExceptDesc,
                'text': onlyExceptText
            },
            'when': {
                'name': 'when',
                'link_name': 'when',
                'option_text': 'when',
                'desc': whenDesc,
                'text': whenText
            },
            'retry': {
                'name': 'retry',
                'link_name': 'retry',
                'option_text': 'retry',
                'desc': retryDesc,
                'text': retryText
            }
        }
    },
    'artifacts': {
        'option_text': 'Save artifacts',
        'action_text': 'I need to specify: ',
        'selector_id': 'sel-artifacts',
        'data': {
            'artifacts': {
                'name': 'artifacts',
                'link_name': 'artifacts',
                'option_text': 'artifacts',
                'desc': artifactsDesc,
                'text': artifactsText
            },
            'dependencies': {
                'name': 'dependencies',
                'link_name': 'dependencies',
                'option_text': 'dependencies',
                'desc': dependenciesDesc,
                'text': dependenciesText
            }
        }
    }
};


var explorerData = {
    'en': explorerDataEn
}