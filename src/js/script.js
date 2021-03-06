function toggle_lecturers() {
    var lecturer = document.getElementsByClassName('lecturer__list-item'),
        description = document.getElementsByClassName('lecturer-description'),
        i,
        currID;

    for (i = 0; i < lecturer.length; i++) {
        lecturer[i].addEventListener('click', function () {
            currID = this.id;
            for (var j = 0; j < description.length; j++) {
                description[j].classList.remove('opened');
                lecturer[j].classList.remove('active');
            }
            if (this.classList.contains('active')) {
                this.classList.remove('active');
            } else {
                this.classList.add('active');
            }

            var el = document.querySelector('[data-lecturer="' + currID + '"]');

            if (el.classList.contains('opened')) {
                el.classList.remove('opened');
            } else {
                el.classList.add('opened');
            }
        });

    }
};

function count_time() {
    var hours_container = document.getElementById('hours'),
        minutes_container = document.getElementById('minutes'),
        seconds_container = document.getElementById('seconds'),
        days_container = document.getElementById('days'),
        hours_label = document.getElementById('hours-label'),
        minutes_label = document.getElementById('minutes-label'),
        seconds_label = document.getElementById('seconds-label'),
        days_label = document.getElementById('days-label'),
        now = new Date(),
        event_date = new Date('2017', '06', '13'),
        curren_time = now.getTime(),
        event_time = event_date.getTime(),
        rem_time = event_time - curren_time,
        days,
        hours,
        minutes,
        seconds,
        s = Math.floor(rem_time / 1000),
        m = Math.floor(s / 60),
        h = Math.floor(m / 60),
        d = Math.floor(h / 60);

    h %= 24;
    m %= 60;
    s %= 60;

    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
        m = "0" + m;
    }
    if (s < 10) {
        s = "0" + s;
    }
    if (d == 1) {
        days = " dzień ";
    } else {
        days = " dni ";
    }

    if (h == 1) {
        hours = " godzina ";
    } else if (h > 1 && h < 5) {
        hours = " godziny ";
    } else {
        hours = " godzin ";
    }

    if (m == 1) {
        minutes = " minuta ";
    } else if (m > 1 && m < 5) {
        minutes = " minuty ";
    } else {
        minutes = " minut ";
    }

    if (s == 1) {
        seconds = " sekunda ";
    } else if (s > 1 && s < 5) {
        seconds = " sekundy "
    } else {
        seconds = " sekund ";
    }
    days_container.textContent = d;
    days_label.textContent = days;

    hours_container.textContent = h;
    hours_label.textContent = hours;

    minutes_container.textContent = m;
    minutes_label.textContent = minutes;

    seconds_container.textContent = s;
    seconds_label.textContent = seconds;

    setTimeout(count_time, 1000);
};

function toggleNavigation() {
    var nav = document.getElementsByTagName('nav'),
        btn = document.getElementsByClassName('main__nav-list_item-button_wrapper');

    btn[0].addEventListener('click', function () {
        if (nav[0].classList.contains('is-opened')) {
            nav[0].classList.remove('is-opened');
        } else {
            nav[0].classList.add('is-opened');
        }
    });
};

toggleNavigation();

if(document.getElementById('hours')){
   count_time();    
}
toggle_lecturers();