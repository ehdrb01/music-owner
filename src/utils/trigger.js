/////////////////////////스크롤 트리거
const trigger = new ScrollTrigger.default({
    trigger: {
        once: true,
        offset: {
            viewport: {
                x: 0,
                y: 0.3,
            }
        },
        toggle: {
            class: {
                in: 'top_trigger_on',
                out: 'top_trigger_off'
            }
        }
    }
});

trigger.add('[data-trigger]');

const trigger2 = new ScrollTrigger.default({
    trigger: {
        once: true,
        offset: {
            viewport: {
                x: 0,
                y: 0.3,
            }
        },
        toggle: {
            class: {
                in: 'left_trigger_on',
                out: 'left_trigger_off'
            }
        }
    }
});

trigger2.add('[data-trigger2]');

const trigger3 = new ScrollTrigger.default({
    trigger: {
        once: true,
        offset: {
            viewport: {
                x: 0,
                y: 0.3,
            }
        },
        toggle: {
            class: {
                in: 'right_trigger_on',
                out: 'right_trigger_off'
            }
        }
    }
});

trigger3.add('[data-trigger3]');

const trigger4 = new ScrollTrigger.default({
    trigger: {
        once: true,
        offset: {
            viewport: {
                x: 0,
                y: 0.3,
            }
        },
        toggle: {
            class: {
                in: 'bot_trigger_on',
                out: 'bot_trigger_off'
            }
        }
    }
});

trigger4.add('[data-trigger4]');
