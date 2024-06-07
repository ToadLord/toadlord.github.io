
document.addEventListener('DOMContentLoaded', work);

function work()
{
    document.querySelector('.center').addEventListener('click', show);

    function show()
    {
        // Must be in quotation marks according ddb since the setting values are strings.
        document.querySelector('.center').remove();

        document.querySelector('.hidden').style.visibility = 'visible';
    }
}

