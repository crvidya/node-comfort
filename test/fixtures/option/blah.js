'use strict';

exports.options = {
    force: {
        type: Boolean,
        info: 'if `true`, cortex will force to overriding existing files.'
    },

    watch: {
        type: Boolean,
        info: 'if `true`, cortex will also watch the current directory.',
        default: true
    },

    retry: {
        type: Number,
        default: 0,
        setter: function(value){
            var done = this.async();

            done(value < 10 ? null : true, value);
        }
    }
};

exports.shorthands = {
    f: 'force',
    nw: {
        watch: false
    }
};

exports.info = 'Initialize a repo';

exports.usage = '{{name}} init [--force]';