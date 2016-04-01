$(document).ready(function() {

  $('.dropdown-menu input, .dropdown-menu label').click(function(e) {
    e.stopPropagation();
  });

  $('.form').on('keydown', function(e) {
    if(!(e.keyCode == 13 && e.metaKey)) return;

    var target = e.target;
    if(target.form) {
      target.form.submit();
    }

  });


  $('.column').height($('.col').height());

  makeCardsSortable();

  $('.panel').draggable({

    connectToSortable: '.sortable',
    cursor: 'move',
    zIndex: 100,

    stop: function(event, ui) {


      var fromBacklog    = this.className.includes('backlog');
      var fromReady      = this.className.includes('ready');
      var fromInprogress = this.className.includes('in-progress');
      var fromCompleted  = this.className.includes('completed');

      if (fromBacklog) {
        var oldColumn = 'backlog';
      }

      if (fromReady) {
        var oldColumn = 'ready';
      }

      if (fromInprogress) {
        var oldColumn = 'in-progress';
      }

      if (fromCompleted) {
        var oldColumn = 'completed';
      }

      var toBacklog    = this.parentElement.className.includes('backlog');
      var toReady      = this.parentElement.className.includes('ready');
      var toInprogress = this.parentElement.className.includes('in-progress');
      var toCompleted  = this.parentElement.className.includes('completed');

      if (toBacklog && oldColumn !== 'backlog') {
        var newColumn = 'backlog';

        $(this).addClass('backlog');
        $(this).removeClass('in-progress ready completed');

        var owner  = this.dataset.owner;
        var repo   = this.dataset.repo;
        var number = this.dataset.number;

        updateColumnIssues(owner, repo, number, oldColumn, newColumn);

      }


      if (toReady && oldColumn !== 'ready') {
        var newColumn = 'ready';
        $(this).addClass('ready');
        $(this).removeClass('backlog in-progress completed');


        var owner  = this.dataset.owner;
        var repo   = this.dataset.repo;
        var number = this.dataset.number;

        updateColumnIssues(owner, repo, number, oldColumn, newColumn);

      }

      if (toInprogress && oldColumn !== 'in-progress') {
        var newColumn = 'in-progress';
        $(this).addClass('in-progress');
        $(this).removeClass('backlog ready completed');

        var owner  = this.dataset.owner;
        var repo   = this.dataset.repo;
        var number = this.dataset.number;

        updateColumnIssues(owner, repo, number, oldColumn, newColumn);

        var timeString = this.dataset.timerSeconds;
        var timeInt = parseInt(timeString);

        var timer;


        timer = new FlipClock($('.timer-graphic'), timeInt, {
          clockFace: 'MinuteCounter',
          countdown: true,
          autostart: true
        });

        console.log(timeInt);
        console.log(timer);
        console.log('Timer set for ' + timeString);
        var milliSeconds = timeInt * 1000;
        window.setTimeout(giveAlert, milliSeconds + 1000);


      }

      if (toCompleted && oldColumn !== 'completed') {
        var newColumn = 'completed';
        $(this).addClass('completed');
        $(this).removeClass('backlog ready in-progress');

        var owner  = this.dataset.owner;
        var repo   = this.dataset.repo;
        var number = this.dataset.number;

        updateColumnIssues(owner, repo, number, oldColumn, newColumn);

      }
    }

  });

});

function giveAlert() {
  alert('Times up!');
}

