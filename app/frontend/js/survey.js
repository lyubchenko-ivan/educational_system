import * as Survey from 'survey-jquery';
import $ from 'jquery';

let json = {
    title: "Algorithms and Data Structures",
    showProgressBar: "top",
    pages: [
        {
            questions: [
                {
                    type: 'radiogroup',
                    name: '0',
                    title: 'Time required to merge two sorted lists of size m and n, is',
                    choices: [
                        'O(m + n)',
                        'O(m log n)',
                        'O(n log m)',
                        'O(n)'
                    ],
                }
            ]
        },
        {
            questions: [
                {
                    type: 'radiogroup',
                    name: '1',
                    title: 'For a binary search algorithm to work, it is necessary that the array (list) must be',
                    choices: [
                        'sorted',
                        'unsorted',
                        'in a heap',
                        'popped out of stack'
                    ],
                }
            ]
        },
        {
            questions: [
                {
                    type: 'radiogroup',
                    name: '2',
                    title: 'Which of the following usees FIFO method',
                    choices: [
                        'Queue',
                        'Stack',
                        'Hash Table',
                        'Binary Search Tree'
                    ],
                }
            ]
        },
        {
            questions: [
                {
                    type: 'radiogroup',
                    name: '3',
                    title: ' push() and pop() functions are found in',
                    choices: [
                        'queues',
                        'lists',
                        'stacks',
                        'trees',

                    ],
                }
            ]
        },
        {
            questions: [
                {
                    type: 'radiogroup',
                    name: '4',
                    title: 'Linked list search complexity is',
                    choices: [
                        'O(1)',
                        'O(n)',
                        'O(log n)',
                        'O(log log n)'
                    ],
                }
            ]
        }
    ]
};

function renderResult(result) {
    if (result){
        $('.alert-success').removeClass('d-none');
    } else {
        $('.alert-danger').removeClass('d-none');
    }
}

Survey.defaultBootstrapCss.navigationButton = 'btn btn-secondary';
Survey.defaultBootstrapCss.matrixdynamic.button = 'btn btn-secondary';
Survey.StylesManager.applyTheme('bootstrap');

let survey = new Survey.Model(json);
survey.onComplete.add((result) => {
    $.ajax({
        url: '/user/bitset/survey',
        method: 'GET',
        data: { data: result.data },
        dataType: 'html'
    }).done((e) => {
        renderResult(e);
    })

});

$(window).ready(() => {
    $('#surveyElement').Survey({
        model: survey
    });
});
