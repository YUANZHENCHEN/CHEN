function showNewModels() {
    const oldModelSelect = document.getElementById('old-model');
    const newModelsDiv = document.getElementById('new-models');
    const modelList = document.getElementById('model-list');
    const tableBody = document.getElementById('table-body');
    const modelTable = document.getElementById('model-table');

    // 清空旧的列表和表格
    modelList.innerHTML = '';
    tableBody.innerHTML = '';

    const oldModelValue = oldModelSelect.value;

    let newModels = [];

    // 根据选择的旧机型推荐新机型及其参数
    switch (oldModelValue) {
        case 'model1':
            newModels = [
                {
                    name: '新机型 A',
                    image: 'https://i.ibb.co/67Db5pk2/1751592073313.png', // 替换为实际图片链接
                    params: {
                        'Dsskey': '21',
                        'SIP accounts': '12111222111',
                        'Ethernet': '2*GigE',
                        'POE': '√',
                        'Display': '3.7" 360x160 graphical LCD',
                        'Backlight': '√',
                        'Color Screen': 'x',
                        'Way Conference': '5',
                        'WiFi': 'Wi-Fi Via WF50',
                        'Bluetooth': 'Bluetooth Via BT41',
                        'Expansion Module': '√',
                        'Network': 'IPv4/IPv6',
                        'USB Port': '2'
                    }
                },
                // 添加其他新机型
            ];
            break;
        case 'model2':
            newModels = [
                {
                    name: '新机型 B',
                    image: 'https://via.placeholder.com/100',
                    params: {
                        'Dsskey': '18',
                        'SIP accounts': '10',
                        'Ethernet': '1*GigE',
                        'POE': '√',
                        'Display': '4.0" 480x272 graphical LCD',
                        'Backlight': '√',
                        'Color Screen': '√',
                        'Way Conference': '3',
                        'WiFi': 'Wi-Fi Via WF51',
                        'Bluetooth': 'Bluetooth Via BT42',
                        'Expansion Module': '×',
                        'Network': 'IPv4',
                        'USB Port': '1'
                    }
                },
                // 添加其他新机型
            ];
            break;
        case 'model3':
            newModels = [
                {
                    name: '新机型 C',
                    image: 'https://via.placeholder.com/100',
                    params: {
                        'Dsskey': '15',
                        'SIP accounts': '8',
                        'Ethernet': '1*GigE',
                        'POE': '√',
                        'Display': '2.8" 240x320 graphical LCD',
                        'Backlight': '√',
                        'Color Screen': 'x',
                        'Way Conference': '2',
                        'WiFi': 'Wi-Fi Via WF52',
                        'Bluetooth': '×',
                        'Expansion Module': '√',
                        'Network': 'IPv4',
                        'USB Port': '1'
                    }
                },
                // 添加其他新机型
            ];
            break;
        default:
            newModels = [];
    }

    // 如果有新机型，显示它们
    if (newModels.length > 0) {
        newModels.forEach(model => {
            const li = document.createElement('li');
            li.textContent = model.name;
            modelList.appendChild(li);

            // 添加到表格
            const row = document.createElement('tr');
            row.innerHTML = `
                <td><img src="${model.image}" alt="${model.name}"></td>
                <td>${model.name}</td>
            `;
            tableBody.appendChild(row);

            // 添加参数到表格
            for (const [param, value] of Object.entries(model.params)) {
                const paramRow = document.createElement('tr');
                paramRow.innerHTML = `
                    <td>${param}</td>
                    <td>${value}</td>
                `;
                tableBody.appendChild(paramRow);
            }
        });
        newModelsDiv.style.display = 'block';
        modelTable.style.display = 'table'; // 显示表格
    } else {
        newModelsDiv.style.display = 'none';
        modelTable.style.display = 'none'; // 隐藏表格
    }
}
