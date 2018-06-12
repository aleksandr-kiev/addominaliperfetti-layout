function getQueryString() {
    var result = {}, queryString = location.search.substring(1),
        re = /([^&=]+)=([^&]*)/g, m;

    while (m = re.exec(queryString)) {
        result[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
    }

    return result;
}

function DebugOpen()
{
    dbg = document.getElementById('Debug');
    dbg.style.height = '300px';
    dbg.style.width = '100%';
}

function DebugClose()
{
    dbg = document.getElementById('Debug');
    dbg.style.height = '20px';
    dbg.style.width = '20px';
}

function printwindow()
{
    win = open(document.location.href + '/print_page', null, "height=400,width=760,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");
}

function sendwindow(prefix)
{
    win = open(prefix+"ModShow/ShowEmailDialog?url="+document.location.href+"&title="+document.title,null,"height=350,width=600,status=yes,toolbar=no,menubar=no,location=no,scrollbars=yes,resizable=yes");
}

function addbookmark()
{
    window.external.AddFavorite( location.href, document.title );
}
<!--
    function popup(type,id,width,height,title)
    {
        switch (type)
        {
            case 1:
            {
                win = window.open('http://www.truthaboutabs.com/ModPopUp/Show/'+id,'','width=,height=,scrollbars=1,location=0,statusbar=0,menubar=0');
                break;
            }
            case 2:
            {
                // check if internal

                if (false == is_internal)
                {
                    win = window.open('http://www.truthaboutabs.com/ModPopUp/Show/'+id,'','width=,height=,scrollbars=1,location=0,statusbar=0,menubar=0');
                }
                break;
            }
            case 3:
            {
                win = window.open('http://www.truthaboutabs.com/ModPopUp/Show/'+id,'','width=,height=,scrollbars=1,location=0,statusbar=0,menubar=0');
                window.focus();
                break;
            }
        }
    }

-->