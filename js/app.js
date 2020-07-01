const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Boston, MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jen Smith',
        age: 28,
        gender: 'Female',
        lookingfor: 'Male',
        location: 'Miami, FL',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'Ted Hope',
        age: 31,
        gender: 'Male',
        lookingfor: 'Female',
        location: 'Salt Lake City, UT',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    },
    {
        name: 'Lucy Apple',
        age: 34,
        gender: 'Female',
        lookingfor: 'Male',
        location: 'New York, New York',
        image: 'https://randomuser.me/api/portraits/women/84.jpg'
    },
    {
        name: 'Cathy Miller',
        age: 38,
        gender: 'Female',
        lookingfor: 'Female',
        location: 'Seattle, WA',
        image: 'https://randomuser.me/api/portraits/women/85.jpg'
    },
    {
        name: 'Tyler Schmitt',
        age: 37,
        gender: 'Male',
        lookingfor: 'female',
        location: 'Jacksonville, FL',
        image: 'https://randomuser.me/api/portraits/men/85.jpg'
    }
];

const profiles = profileIterator(data);

//Call first profile
nextProfile();

//Next Event
document.getElementById('next').addEventListener('click', nextProfile);

//Next Profile Display

function nextProfile(){
    const currentProfile = profiles.next().value;


    if(currentProfile !== undefined){
        document.getElementById('profileDisplay').innerHTML = `
            <ul class='list-group'>
                <li class='list-group-item'>Name: ${currentProfile.name}</li>
                <li class='list-group-item'>Age: ${currentProfile.age}</li>
                <li class='list-group-item'>Location: ${currentProfile.location}</li>
                <li class='list-group-item'> Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
            </ul>
        `;

    document.getElementById('imageDisplay').innerHTML = `
        <img src="${currentProfile.image}">`;
    }else{
        //No more profiles
        window.location.reload();

    }
}

//Profile interator
function profileIterator(profiles){
    let nextIndex = 0;

    return{
        next: function(){
            return nextIndex < profiles.length ?
             { value: profiles[nextIndex++], done: false} : 
             {done: true}
        }
    };
}