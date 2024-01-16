/* Global Variables */
let r = document.querySelector(":root");
let bg = document.getElementById("background");
let theme = document.getElementById("theme");
let theme2 = document.getElementById("theme-secondary");
let txt = document.getElementById("text");
let txt2 = document.getElementById("text-secondary");
let bx = document.getElementById("box");
let c = document.getElementById("impo");

c.addEventListener("input", function(){
    document.getElementById("impoBtn").disabled = (this.value === '');
}) 

/**
 * The bx234 function
 * @description - bx234 takes a hexadecimal color code as input and returns an object with the
 * corresponding RGB values.
 * @param bx - The parameter `bx` is a string representing a hexadecimal color code.
 * @returns The function `bx234` returns an object with properties `r`, `g`, and `b` if the input `bx`
 * is a valid hexadecimal color code. If the input is not a valid color code, it returns `null`.
 */
function bx234(bx) {
    let sRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    bx = bx.replace(sRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    })
    let res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(bx);
    return res ? {
        r: parseInt(res[1], 16),
        g: parseInt(res[2], 16),
        b: parseInt(res[3], 16)
    } : null;
}

/**
 * The laziness function
 * @description - takes a parameter d and returns the values of r, g, and b from the bx234
 * function applied to d, separated by commas.
 * @param d - The parameter "d" is likely referring to a color value or an object that contains color
 * values.
 * @returns The function `laziness` returns a string that represents the values of the red, green, and
 * blue components of the color `d`.
 */
function laziness(d) {
    return bx234(d).r + ", " + bx234(d).g + ", " + bx234(d).b
}

function genCode() {
    let c = document.getElementById("impo");
    bg.value = '';
    theme.value = '';
    theme2.value = '';
    txt.value = '';
    txt2.value = '';
    bx.value = '';
    let nc = atob(c.value);
    const [bgc, tc, t2c, txtc, txt2c, bxc] = nc.split('|');
    console.log(bgc);
    bg.value = bgc;
    theme.value = tc;
    theme2.value = t2c;
    txt.value = txtc;
    txt2.value = txt2c;
    bx.value = bxc;
    r.style.setProperty('--background', "url('" + bgc + "')");
    r.style.setProperty('--theme', tc);
    r.style.setProperty('--theme-secondary', t2c);
    r.style.setProperty('--text', txtc);
    r.style.setProperty('--text-secondary', txt2c);
    r.style.setProperty('--box', bxc);
    r.style.setProperty('--box2', "rgba(" + laziness(bxc) + ", 0.8)");
    r.style.setProperty('--box3', "rgba(" + laziness(bxc) + ", 0.7)");
    r.style.setProperty('--box4', "rgba(" + laziness(bxc) + ", 0.5)");
}

// Thank you to LCweb for making LC Color Picker.
// cause without it, I wouldn't have made this update :)
// https://lcweb.it/

let form = document.getElementById("form");
new lc_color_picker('input[name="theme"]', {
    modes: ['solid'],
    transparency: true,
    open_on_focus: true,
    wrap_width: '100%',
    preview_style: {
        input_padding: 45,
        side: 'left',
        width: 40,
    },

    on_change: function (new_value, target_field) {
        document.querySelector(":root").style.setProperty('--theme', new_value);
    },
});
new lc_color_picker('input[name="theme-secondary"]', {
    modes: ['solid'],
    transparency: true,
    open_on_focus: true,
    wrap_width: '100%',
    preview_style: {
        input_padding: 45,
        side: 'left',
        width: 40,
    },

    on_change: function (new_value, target_field) {
        document.querySelector(":root").style.setProperty('--theme-secondary', new_value);
    },
});
new lc_color_picker('input[name="text"]', {
    modes: ['solid'],
    transparency: true,
    open_on_focus: true,
    wrap_width: '100%',
    preview_style: {
        input_padding: 45,
        side: 'left',
        width: 40,
    },

    on_change: function (new_value, target_field) {
        document.querySelector(":root").style.setProperty('--text', new_value);
    },
});
new lc_color_picker('input[name="text-secondary"]', {
    modes: ['solid'],
    transparency: true,
    open_on_focus: true,
    wrap_width: '100%',
    preview_style: {
        input_padding: 45,
        side: 'left',
        width: 40,
    },

    on_change: function (new_value, target_field) {
        document.querySelector(":root").style.setProperty('--text-secondary', new_value);
    },
});
new lc_color_picker('input[name="box"]', {
    modes: ['solid'],
    transparency: true,
    open_on_focus: true,
    wrap_width: '100%',
    preview_style: {
        input_padding: 45,
        side: 'left',
        width: 40,
    },

    on_change: function (new_value, target_field) {
        document.querySelector(":root").style.setProperty('--box', new_value);
    },
});
document.body.addEventListener("change", () => {
    let urlp = `${bg.value}|${theme.value}|${theme2.value}|${txt.value}|${txt2.value}|${bx.value}`;
    code.value = btoa(urlp);

    let r = document.querySelector(":root");
    r.style.setProperty('--background', "url('" + bg.value + "')");
    r.style.setProperty('--theme', theme.value);
    r.style.setProperty('--theme-secondary', theme2.value);
    r.style.setProperty('--text', txt.value);
    r.style.setProperty('--text-secondary', txt2.value);
    r.style.setProperty('--box', bx.value);
    r.style.setProperty('--box2', "rgba(" + laziness(bx.value) + ", 0.8)");
    r.style.setProperty('--box3', "rgba(" + laziness(bx.value) + ", 0.7)");
    r.style.setProperty('--box4', "rgba(" + laziness(bx.value) + ", 0.5)");
})

let ta = document.getElementById("code");
function copy() {
    if (ta.value.length == 0) {
        alert("what are you copying? THERES NOTHING TO COPY 😂🫵")
    } else {
        ta.select();
        ta.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(ta.value);
        alert("Text Copied! Make sure to submit it to the form when you can :)");
    }
}

form.onclick = () => {
    window.open('https://forms.gle/WDj9wTitKdeJw1Gp8', "myWindow", 'width=800,height=600');
};