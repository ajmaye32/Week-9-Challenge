let pInfo = function () {
    let acess = function () {

        var pil = {
            name: 'Anthony',
            Dob: number(04 / 08 / 1900),
            ssn: '4545567543',
            phoneNumber: 4044444944,


        }

        getName = (name, phoneNumber) => {
            return pil.name + ' ' + pil.phoneNumber
        }
        return getName(pil)
    };
    return acess();
};

let publicInfo = pInfo();
console.log(publicInfo);