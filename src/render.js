const captureScreenBtn = document.getElementById('screen-capture-btn');
const { desktopCapturer, remote } = require('electron');
captureScreenBtn.onclick = getScreenShot;
const { Menu } = remote;
async function getScreenShot() {
    const inputSources = await desktopCapturer.getSources({
        types: ['window', 'screen']
    });
    const videoOptionsMenu = Menu.buildFromTemplate(
        inputSources.map(source=> {
            return {
                label: source.name,
                click: () => selectSource(source),
            }
        })
    );
    videoOptionsMenu.popup();
}

function selectSource(source) {
    console.log(source)
}
