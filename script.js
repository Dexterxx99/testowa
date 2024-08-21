document.getElementById('video-options').addEventListener('change', function() {
    const seasonContainer = document.getElementById('season-container');
    const episodeContainer = document.getElementById('episode-container');
    const seasonSelect = document.getElementById('season-options');
    const episodeSelect = document.getElementById('episode-options');
    const videoLinks = document.getElementById('video-links');

    // Ukryj kontener linków
    videoLinks.innerHTML = '';

    const selectedValue = this.value;

    seasonContainer.style.display = 'none';
    episodeContainer.style.display = 'none';

    // Wypełnij sezonami odpowiedni kontener
    if (selectedValue === 'lego-nexo-knights' || selectedValue === 'slugterra' || selectedValue === 'generator-rex' || selectedValue === 'lego-ninjago' || selectedValue === 'bakugan' || selectedValue === 'chima') {
        const seasons = {
            'lego-nexo-knights': ['Sezon 1', 'Sezon 2', 'Sezon 3', 'Sezon 4'],
            'slugterra': ['Sezon 1', 'Sezon 2', 'Sezon 3', 'Sezon 4'],
            'generator-rex': ['Sezon 1', 'Sezon 2', 'Sezon 3'],
            'lego-ninjago': ['Sezon 1','Sezon 2','Sezon 3','Sezon 4','Sezon 5','Sezon 6','Sezon 7','Sezon 8','Sezon 9','Sezon 10','Sezon 11','Sezon 12','Sezon 13','Sezon 14','Sezon 15','Sezon 16'],
            'bakugan': ['Sezon 1','Sezon 2','Sezon 3','Sezon 4'],
            'chima': ['Sezon 1','Sezon 2','Sezon 3']
        };

        seasonSelect.innerHTML = ''; // Czyści poprzednie sezony

        seasons[selectedValue].forEach(function(season, index) {
            const option = document.createElement('option');
            option.value = 'season' + (index + 1);
            option.textContent = season;
            seasonSelect.appendChild(option);
        });

        seasonContainer.style.display = 'block';
        // Automatycznie załaduj odcinki dla "Sezon 1"
        seasonSelect.value = 'season1';
        seasonSelect.dispatchEvent(new Event('change'));
    }
});

document.getElementById('season-options').addEventListener('change', function() {
    const selectedSeries = document.getElementById('video-options').value;
    const selectedSeason = this.value;
    populateEpisodes(selectedSeries, selectedSeason);
});

function populateEpisodes(series, season) {
    const episodeContainer = document.getElementById('episode-container');
    const episodeSelect = document.getElementById('episode-options');
    const videoLinks = document.getElementById('video-links');

    videoLinks.innerHTML = ''; // Czyści poprzednie linki

    const episodes = {
        'lego-nexo-knights': {
            'season1': Array.from({ length: 10 }, (_, i) => `Odcinek ${i + 1}`),
            'season2': Array.from({ length: 10 }, (_, i) => `Odcinek ${i + 1}`),
            'season3': Array.from({ length: 10 }, (_, i) => `Odcinek ${i + 1}`),
            'season4': Array.from({ length: 10 }, (_, i) => `Odcinek ${i + 1}`)
        },
        'slugterra': {
            'season1': Array.from({ length: 13 }, (_, i) => `Odcinek ${i + 1}`),
            'season2': Array.from({ length: 16 }, (_, i) => `Odcinek ${i + 1}`),
            'season3': Array.from({ length: 10 }, (_, i) => `Odcinek ${i + 1}`),
            'season4': Array.from({ length: 13 }, (_, i) => `Odcinek ${i + 1}`)
        },
        'generator-rex': {
            'season1': Array.from({ length: 20 }, (_, i) => `Odcinek ${i + 1}`),
            'season2': Array.from({ length: 20 }, (_, i) => `Odcinek ${i + 1}`),
            'season3': Array.from({ length: 20 }, (_, i) => `Odcinek ${i + 1}`)
        },
        'lego-ninjago': {
            'season1': Array.from({ length: 13}, (_, i) => `Odcinek ${i + 1}`),
            'season2': Array.from({ length: 13}, (_, i) => `Odcinek ${i + 1}`),
            'season3': Array.from({ length: 8}, (_, i) => `Odcinek ${i + 1}`),
            'season4': Array.from({ length: 10}, (_, i) => `Odcinek ${i + 1}`),
            'season5': Array.from({ length: 10}, (_, i) => `Odcinek ${i + 1}`),
            'season6': Array.from({ length: 10}, (_, i) => `Odcinek ${i + 1}`),
            'season7': Array.from({ length: 10}, (_, i) => `Odcinek ${i + 1}`),
            'season8': Array.from({ length: 10}, (_, i) => `Odcinek ${i + 1}`),
            'season9': Array.from({ length: 10}, (_, i) => `Odcinek ${i + 1}`),
            'season10': Array.from({ length: 4}, (_, i) => `Odcinek ${i + 1}`),
            'season11': Array.from({ length: 30}, (_, i) => `Odcinek ${i + 1}`),
            'season12': Array.from({ length: 16}, (_, i) => `Odcinek ${i + 1}`),
            'season13': Array.from({ length: 16}, (_, i) => `Odcinek ${i + 1}`),
            'season14': Array.from({ length: 20}, (_, i) => `Odcinek ${i + 1}`),
            'season15': Array.from({ length: 30}, (_, i) => `Odcinek ${i + 1}`),
            'season16': Array.from({ length: 40}, (_, i) => `Odcinek ${i + 1}`),
        },
        'bakugan': {
            'season1': Array.from({ length:52}, (_, i) => `Odcinek ${i + 1}`),
            'season2': Array.from({ length:52}, (_, i) => `Odcinek ${i + 1}`),
            'season3': Array.from({ length:39}, (_, i) => `Odcinek ${i + 1}`),
            'season4': Array.from({ length:46}, (_, i) => `Odcinek ${i + 1}`),
        },
        'chima': {
            'season1': Array.from({ length:20}, (_, i) => `Odcinek ${i + 1}`),
            'season2': Array.from({ length:6}, (_, i) => `Odcinek ${i + 1}`),
            'season3': Array.from({ length:15}, (_, i) => `Odcinek ${i + 1}`),
        }
    };

    const selectedEpisodes = episodes[series][season || ''];
    episodeSelect.innerHTML = ''; // Czyści poprzednie odcinki

    if (selectedEpisodes) {
        selectedEpisodes.forEach(function(episode) {
            const option = document.createElement('option');
            option.value = episode.toLowerCase().replace(/\s/g, '-');
            option.textContent = episode;
            episodeSelect.appendChild(option);
        });

        episodeContainer.style.display = 'block';

        // Automatycznie wyświetl pierwszy odcinek po załadowaniu
        if (episodeSelect.options.length > 0) {
            episodeSelect.value = episodeSelect.options[0].value;
            updateVideoLinks(series, season, episodeSelect.value);
        }
    } else {
        episodeContainer.style.display = 'none';
    }

    episodeSelect.addEventListener('change', function() {
        const selectedEpisode = this.value;
        updateVideoLinks(series, season, selectedEpisode);
    });
}

function updateVideoLinks(series, season, episode) {
    const videoLinks = document.getElementById('video-links');
    videoLinks.innerHTML = ''; // Czyści poprzednie linki

    const link = document.createElement('a');
    link.href = getVideoUrl(series, season, episode);
    link.textContent = episode.replace('-', ' ');
    link.target = '_blank'; // Otwiera link w nowej karcie
    videoLinks.appendChild(link);

    videoLinks.style.display = 'block';
}


function getVideoUrl(series, season, episode) {
    // Zwraca odpowiedni URL na podstawie wyboru
    const urls = {
        'lego-nexo-knights': {
            'season1': {
                'odcinek-1': 'https://www.youtube.com/watch?v=GbpGytJ9nCA',
                'odcinek-2': 'https://www.youtube.com/watch?v=F6kaVFHPT6w',
                'odcinek-3': 'https://www.youtube.com/watch?v=64ba0-qNTXY',
                'odcinek-4': 'https://www.youtube.com/watch?v=9jxFIjpK0qA',
                'odcinek-5': 'https://www.youtube.com/watch?v=I4nyFObTGt0',
                'odcinek-6': 'https://www.youtube.com/watch?v=7Vr7ZVlkqgg',
                'odcinek-7': 'https://www.youtube.com/watch?v=ot92VHoq_k8',
                'odcinek-8': 'https://www.youtube.com/watch?v=ZSqdPU6eQhQ',
                'odcinek-9': 'https://www.youtube.com/watch?v=QVpbIbKgu14',
                'odcinek-10': 'https://www.youtube.com/watch?v=yYhr4yuTX5M'
            },
            'season2': {
                'odcinek-1': 'https://www.youtube.com/watch?v=7K3urTkOsQ0',
                'odcinek-2': 'https://www.youtube.com/watch?v=2HG7Q1gnKnE',
                'odcinek-3': 'https://www.youtube.com/watch?v=dJxcEtol7ZY',
                'odcinek-4': 'https://www.youtube.com/watch?v=9sMDxGKJ4dE',
                'odcinek-5': 'https://www.youtube.com/watch?v=MgsSPvPub0c',
                'odcinek-6': 'https://www.youtube.com/watch?v=PHpMVhDkKFU',
                'odcinek-7': 'https://www.youtube.com/watch?v=QSn7qbFk4R0',
                'odcinek-8': 'https://www.youtube.com/watch?v=Z2dSKVkAvlg',
                'odcinek-9': 'https://www.youtube.com/watch?v=cqOqCFuJsuk',
                'odcinek-10': 'https://www.youtube.com/watch?v=0WVscb3O7N8'
            },
            'season3': {
                'odcinek-1': 'https://www.youtube.com/watch?v=example21',
                'odcinek-2': 'https://www.youtube.com/watch?v=example22',
                'odcinek-3': 'https://www.youtube.com/watch?v=example23',
                'odcinek-4': 'https://www.youtube.com/watch?v=example24',
                'odcinek-5': 'https://www.youtube.com/watch?v=example25',
                'odcinek-6': 'https://www.youtube.com/watch?v=example26',
                'odcinek-7': 'https://www.youtube.com/watch?v=example27',
                'odcinek-8': 'https://www.youtube.com/watch?v=example28',
                'odcinek-9': 'https://www.youtube.com/watch?v=example29',
                'odcinek-10': 'https://www.youtube.com/watch?v=example30'
            },
            'season4': {
                'odcinek-1': 'https://www.youtube.com/watch?v=example31',
                'odcinek-2': 'https://www.youtube.com/watch?v=example32',
                'odcinek-3': 'https://www.youtube.com/watch?v=example33',
                'odcinek-4': 'https://www.youtube.com/watch?v=example34',
                'odcinek-5': 'https://www.youtube.com/watch?v=example35',
                'odcinek-6': 'https://www.youtube.com/watch?v=example36',
                'odcinek-7': 'https://www.youtube.com/watch?v=example37',
                'odcinek-8': 'https://www.youtube.com/watch?v=example38',
                'odcinek-9': 'https://www.youtube.com/watch?v=example39',
                'odcinek-10': 'https://www.youtube.com/watch?v=example40'
            }
        },
        'slugterra': {
            'season1': {
                'odcinek-1': 'https://www.youtube.com/watch?v=d2N6WzDE_DQ',
                'odcinek-2': 'https://www.youtube.com/watch?v=L50tDF8C61Q',
                'odcinek-3': 'https://www.youtube.com/watch?v=Zskvb_wzuIY',
                'odcinek-4': 'https://www.youtube.com/watch?v=oiH5LXz2HPI',
                'odcinek-5': 'https://www.youtube.com/watch?v=EAVJnt21bOY',
                'odcinek-6': 'https://www.youtube.com/watch?v=KxZifoL3OPk',
                'odcinek-7': 'https://www.youtube.com/watch?v=axXzZGYBMSY',
                'odcinek-8': 'https://www.youtube.com/watch?v=bmJeohVx3uI',
                'odcinek-9': 'https://www.youtube.com/watch?v=2vpHnBNNtrY',
                'odcinek-10': 'https://www.youtube.com/watch?v=P-9y8hCRNU0',
                'odcinek-11': 'https://www.youtube.com/watch?v=-U_fP9do6sM',
                'odcinek-12': 'https://www.youtube.com/watch?v=0XggkgriAtE',
                'odcinek-13': 'https://www.youtube.com/watch?v=EyPZBdeUNYg'
            },
            'season2': {
                'odcinek-1': 'https://www.youtube.com/watch?v=HoEUXZZe9wE',
                'odcinek-2': 'https://www.youtube.com/watch?v=cNavYf0C6ds',
                'odcinek-3': 'https://www.youtube.com/watch?v=k38sXztJ8wo',
                'odcinek-4': 'https://www.youtube.com/watch?v=VP5P3K1OmuY',
                'odcinek-5': 'https://www.youtube.com/watch?v=CsI0Os2guns',
                'odcinek-6': 'https://www.youtube.com/watch?v=JK13VRc-RIQ',
                'odcinek-7': 'https://www.youtube.com/watch?v=ptU57Wz9bkQ',
                'odcinek-8': 'https://www.youtube.com/watch?v=2xBMie4_HY4',
                'odcinek-9': 'https://www.youtube.com/watch?v=GiF2KNO8p-s',
                'odcinek-10': 'https://www.youtube.com/watch?v=RoeyhsHs5UA',
                'odcinek-11': 'https://www.youtube.com/watch?v=WDm5YcwIRic',
                'odcinek-12': 'https://www.youtube.com/watch?v=e3jGmyUS92M',
                'odcinek-13': 'https://www.youtube.com/watch?v=R7tHsO9YAVQ',
                'odcinek-14': 'https://www.youtube.com/watch?v=IePw4GCVRGw',
                'odcinek-15': 'https://www.youtube.com/watch?v=BYUlP-_sT4g',
                'odcinek-16': 'https://www.youtube.com/watch?v=A_aH-_jeKYE'
            },
            'season3': {
                'odcinek-1': 'https://www.youtube.com/watch?v=TlA9ZYsCZk8',
                'odcinek-2': 'https://www.youtube.com/watch?v=6MME-UWZF3w',
                'odcinek-3': 'https://www.youtube.com/watch?v=T09Tt3rDtu8',
                'odcinek-4': 'https://www.youtube.com/watch?v=0DEZCj8vVek',
                'odcinek-5': 'https://www.youtube.com/watch?v=tOnjx0h48DU',
                'odcinek-6': 'https://www.youtube.com/watch?v=2eVi-Y8jX-g',
                'odcinek-7': 'https://www.youtube.com/watch?v=uBo6swdgs54',
                'odcinek-8': 'https://www.youtube.com/watch?v=wc5IZr82K4s',
                'odcinek-9': 'https://www.youtube.com/watch?v=u5de_SP9DSM',
                'odcinek-10': 'https://www.youtube.com/watch?v=JaVcGEyMikQ'
            },
            'season4': {
                'odcinek-1': 'https://www.youtube.com/watch?v=mF3KtDtU7SY',
                'odcinek-2': 'https://www.youtube.com/watch?v=K8UPKUg9oEw',
                'odcinek-3': 'https://www.youtube.com/watch?v=MV-o0E1GLRI',
                'odcinek-4': 'https://www.youtube.com/watch?v=_bW_oM31aEw',
                'odcinek-5': 'https://www.youtube.com/watch?v=xfJ5CxZPchA',
                'odcinek-6': 'https://www.youtube.com/watch?v=S5CFBQbEQoY',
                'odcinek-7': 'https://www.youtube.com/watch?v=NHxsgHvXh2g',
                'odcinek-8': 'https://www.youtube.com/watch?v=icRyfOZb7-4',
                'odcinek-9': 'https://www.youtube.com/watch?v=7OC0OYymozU',
                'odcinek-10': 'https://www.youtube.com/watch?v=uwKUZ9KYxmg',
                'odcinek-11': 'https://www.youtube.com/watch?v=7uC1_QghQbc',
                'odcinek-12': 'https://www.youtube.com/watch?v=NsOEOkA9CQQ',
                'odcinek-13': 'https://www.youtube.com/watch?v=Ws7vu_6pOR0'
            }
        },
        'generator-rex': {
            'season1': {
                'odcinek-1': 'https://drive.google.com/file/d/1Rqw5Lv511h0g5ZzquzF_H39AtFeLtEH0/view',
                'odcinek-2': 'https://drive.google.com/file/d/1T7_vlRKnEvBWkLrrXq-7VayfV-tVpuk0/view',
                'odcinek-3': 'https://drive.google.com/file/d/1uqd4wcibfmgIPG4Lp3QGmUyl4y6eK_o-/view',
                'odcinek-4': 'https://drive.google.com/file/d/1r0uJy7t_82tnZaCdZHz0u9Epp8o-rytm/view',
                'odcinek-5': 'https://drive.google.com/file/d/1eO-seXTHXZTQYjDyib8X1XCpI7utkK5C/view',
                'odcinek-6': 'https://drive.google.com/file/d/1bCHiaNEe0SoVkrYPfDyFsUy39tzBq1_J/view',
                'odcinek-7': 'https://drive.google.com/file/d/1zXIKhQ6UqiejHGTESezy4mIFOCYiTZqs/view',
                'odcinek-8': 'https://drive.google.com/file/d/1HivVEMaXagqpvDxPs7Umk1gupBb7xyc0/view',
                'odcinek-9': 'https://drive.google.com/file/d/17SLnxxJ4O7v8Gu863lfcjdSydibSXZNL/view',
                'odcinek-10': 'https://drive.google.com/file/d/1fMFzn-K5ipvIH_3zNN7nqVdGu8al9RXn/view',
                'odcinek-11': 'https://drive.google.com/file/d/1u9rCFl9YoCM_tr20n5mYXK_3lF92ZTtG/view',
                'odcinek-12': 'https://drive.google.com/file/d/17YzlOFWCh4QEdcpp7_bQEJLGNUlAOzMy/view',
                'odcinek-13': 'https://drive.google.com/file/d/1lae7cTPz4yfXvNqM5ppfdW5WWLgIh75t/view',
                'odcinek-14': 'https://drive.google.com/file/d/1f-T8gYRuaQnkyW81h0OIjr8Q-ooFv69W/view',
                'odcinek-15': 'https://drive.google.com/file/d/1-ufP1qA0HNxN6IRYOCb_eHCKNfYA11CZ/view',
                'odcinek-16': 'https://drive.google.com/file/d/1RiRLOKXF6CJuKZfA4Ak5ygZeA509DH-5/view',
                'odcinek-17': 'https://drive.google.com/file/d/1HQs6Pe95Zwx78iTLa6UwJRFaxBfip9uT/view',
                'odcinek-18': 'https://drive.google.com/file/d/1KLXv5p_60WvnovJoBOfbL-iiiDRDsBlx/view',
                'odcinek-19': 'https://drive.google.com/file/d/1VVEGl6BzcpmMdHSj1lHE4UAscr8QFROg/view',
                'odcinek-20': 'https://drive.google.com/file/d/1an1VS4gINWY_G0Vb7NfPAMJY8EwXKzWw/view'
            },
            'season2': {
                'odcinek-1': 'https://drive.google.com/file/d/1mUQTRI7k_5tsNoBCpD34HSzEU9yr_-2Q/view',
                'odcinek-2': 'https://drive.google.com/file/d/1m-Nie6tZQ3cHgJPPaAgqnLgjjOp5n8HK/view',
                'odcinek-3': 'https://drive.google.com/file/d/1AV4623f9LU7GV0jBj89zctyUkPGJE7EE/view',
                'odcinek-4': 'https://drive.google.com/file/d/1Dh93JGGE7FJNF5owZDVFZoaI9CONiRft/view',
                'odcinek-5': 'https://drive.google.com/file/d/1fMtdGdbNimGeeWl49aVqRxZz41IYv0BX/view',
                'odcinek-6': 'https://drive.google.com/file/d/1vv9ZodDpPR_7eIz6e6K2jjxpTTB5G-R2/view',
                'odcinek-7': 'https://drive.google.com/file/d/1WHeutgJvWpjq50X5N0CU-PA_Jp8FiGSb/view',
                'odcinek-8': 'https://drive.google.com/file/d/1RYeXw5omwxOn1wV1fD_a3dljkDqV4EVo/view',
                'odcinek-9': 'https://drive.google.com/file/d/1wdWrHwIsGW4pA5hP-xk8w3XR1rbnpFt2/view',
                'odcinek-10': 'https://drive.google.com/file/d/1wdWrHwIsGW4pA5hP-xk8w3XR1rbnpFt2/view',
                'odcinek-11': 'https://drive.google.com/file/d/1rroVqhtnk09sEoMlgP7hA41LEr0BWX2i/view',
                'odcinek-12': 'https://drive.google.com/file/d/1BVg4Me2va4PtJM4Mi8b7JSdZAiWRuglm/view',
                'odcinek-13': 'https://drive.google.com/file/d/1kj-KQ18vRaH-yciMrZknJaTvarkglvB4/view',
                'odcinek-14': 'https://drive.google.com/file/d/1_na-LNuCUbCUqPNsnH2YHi2Cre20OQCS/view',
                'odcinek-15': 'https://drive.google.com/file/d/1aJhaz5HNhPLONyyzqytz5OjWtNyf2XB7/view',
                'odcinek-16': 'https://drive.google.com/file/d/1c3FwA1HfFUtbBny9SFkCkxi7_L2mHiUF/view',
                'odcinek-17': 'https://drive.google.com/file/d/1uNu51oJ3o4CH2Bt90So0drCrP-tFBePh/view',
                'odcinek-18': 'https://drive.google.com/file/d/1zO97Lnjibbm2bltSNQbzveJ26vraHfYy/view',
                'odcinek-19': 'https://drive.google.com/file/d/1kMRdSv318jo4GSOrxrtRGNo72TwjyPJb/view',
                'odcinek-20': 'https://drive.google.com/file/d/12-rd3uc4BOMHDnWsUG6JyVFbsbNAYw4A/view'
            },
            'season3': {
                'odcinek-1': 'https://drive.google.com/file/d/103XlLrpaG_La16pg1t4JcIoj0cAqMTRa/view',
                'odcinek-2': 'https://drive.google.com/file/d/103XlLrpaG_La16pg1t4JcIoj0cAqMTRa/view',
                'odcinek-3': 'https://drive.google.com/file/d/1-vF_WAVNrwz4heN4ziKkGpGBZekhDqNN/view',
                'odcinek-4': 'https://drive.google.com/file/d/1iE1VdJfQ7kGhfcfBuyinQmFIbqRD9nSg/view',
                'odcinek-5': 'https://drive.google.com/file/d/1jNWpNnO4V_fil5W1ug5IAKX79y7ZaUWI/view',
                'odcinek-6': 'https://drive.google.com/file/d/1YL1WYxpzns7x3113quA2NJ7BmPa64C9s/view',
                'odcinek-7': 'https://drive.google.com/file/d/1TafHfptncF4IqEvYAl0XL58P9ZI5fevH/view',
                'odcinek-8': 'https://drive.google.com/file/d/1IVSoT_Lt6QmESY8w9XujGM9k-OPrEo_B/view',
                'odcinek-9': 'https://drive.google.com/file/d/1nQUA4rwSnv_AuzHN1PaC92UIA07tl7Hn/view',
                'odcinek-10': 'https://drive.google.com/file/d/1-hspaL367FrRRQMkNfNB_4LrFP4QXduL/view',
                'odcinek-11': 'https://drive.google.com/file/d/1l3hhnyXy89x0hgb7jXz7lvp9rW6-3_zv/view',
                'odcinek-12': 'https://drive.google.com/file/d/1l3hhnyXy89x0hgb7jXz7lvp9rW6-3_zv/view',
                'odcinek-13': 'https://drive.google.com/file/d/1adMEZUXpTH7xZ3MNxy9MJYVQsz4f5eLB/view',
                'odcinek-14': 'https://drive.google.com/file/d/17L0uV9f_w4yPEn0xBH58roWpSIRh5NrY/view',
                'odcinek-15': 'https://drive.google.com/file/d/1F28z-VU9CnI9-tuqeYjaHAAA5ZMWaSCy/view',
                'odcinek-16': 'https://drive.google.com/file/d/1CkDUYu6RdP4lgVMfVH0bWa2jQ_HrFx39/view',
                'odcinek-17': 'https://drive.google.com/file/d/1h5St24lyRGt_01i6Iu9dUUOXPOj7tSZh/view',
                'odcinek-18': 'https://drive.google.com/file/d/1hf4_v96BvL2gohPYcCabRDj5VF742T4S/view',
                'odcinek-19': 'https://drive.google.com/file/d/1HyfZuVs9t1mUw2DqyKF_5dQnHBRsGmOi/view',
                'odcinek-20': 'https://drive.google.com/file/d/1n8dwnxv2_1CiQUBchtLPAc2k9E-_No07/view'
            }
        },
        'lego-ninjago': {
            'season1': {
                'odcinek-1': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-2': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-3': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-4': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-5': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-6': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-7': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-8': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-9': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-10': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-11': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-12': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-13': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                
            },
            'season2': {
                'odcinek-1': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-2': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-3': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-4': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-5': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-6': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-7': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-8': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-9': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-10': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-11': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-12': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-13': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                
            },
            'season3': {
                'odcinek-1': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-2': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-3': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-4': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-5': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-6': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-7': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-8': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
            },
            'season4': {
                'odcinek-1': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-2': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-3': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-4': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-5': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-6': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-7': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-8': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-9': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-10': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
            },
            'season5': {
                'odcinek-1': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-2': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-3': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-4': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-5': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-6': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-7': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-8': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-9': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-10': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
            },
            'season6': {
                'odcinek-1': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-2': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-3': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-4': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-5': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-6': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-7': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-8': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-9': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-10': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',   
            },
            'season7': {
                'odcinek-1': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-2': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-3': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-4': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-5': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-6': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-7': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-8': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-9': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-10': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
            },
            'season8': {
                'odcinek-1': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-2': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-3': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-4': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-5': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-6': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-7': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-8': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-9': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-10': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',      
            },
            'season9': {
                'odcinek-1': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-2': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-3': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-4': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-5': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-6': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-7': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-8': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-9': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-10': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',    
            },
            'season10': {
                'odcinek-1': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-2': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-3': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-4': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',    
            },
            'season11': {
                'odcinek-1': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-2': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-3': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-4': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-5': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-6': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-7': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-8': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-9': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-10': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-11': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-12': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-13': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-14': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-16': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-17': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-18': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-19': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-20': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-21': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-22': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-23': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-24': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-25': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-26': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-27': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-28': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-29': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-30': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
            },
            'season12': {
                'odcinek-1': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-2': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-3': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-4': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-5': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-6': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-7': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-8': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-9': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-10': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-11': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-12': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-13': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-14': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-15': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-16': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                
            },
            'season13': {
                'odcinek-1': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-2': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-3': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-4': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-5': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-6': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-7': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-8': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-9': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-10': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-11': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-12': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-13': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-14': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-15': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-16': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                
            },
            'season14': {
                'odcinek-1': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-2': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-3': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-4': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-5': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-6': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-7': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-8': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-9': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-10': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-11': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-12': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-13': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-14': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-15': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-16': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-17': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-18': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-19': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-20': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
            },
            'season15': {
                'odcinek-1': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-2': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-3': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-4': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-5': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-6': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-7': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-8': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-9': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-10': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-11': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-12': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-13': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-14': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-15': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-16': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-17': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-18': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-19': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-20': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-21': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-22': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-23': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-24': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-25': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-26': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-27': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-28': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-29': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-30': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',

            },
            'season16': {
                'odcinek-1': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-2': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-3': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-4': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-5': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-6': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-7': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-8': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-9': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-10': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-11': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-12': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-13': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-14': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-15': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-16': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-17': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-18': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-19': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-20': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-21': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-22': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-23': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-24': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-25': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-26': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-27': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-28': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-29': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-30': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-31': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-32': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-33': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-34': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-35': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-36': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-37': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-38': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-39': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',
                'odcinek-40': 'https://www.youtube.com/watch?v=WOPz3DRqiMs',


            }
            
        },
        'bakugan': {
            'season1': {
                'odcinek-1': 'https://www.youtube.com/watch?v=GbpGytJ9nCA',
                'odcinek-2': 'https://www.youtube.com/watch?v=F6kaVFHPT6w',
                'odcinek-3': 'https://www.youtube.com/watch?v=64ba0-qNTXY',
                'odcinek-4': 'https://www.youtube.com/watch?v=9jxFIjpK0qA',
                'odcinek-5': 'https://www.youtube.com/watch?v=I4nyFObTGt0',
                'odcinek-6': 'https://www.youtube.com/watch?v=7Vr7ZVlkqgg',
                'odcinek-7': 'https://www.youtube.com/watch?v=ot92VHoq_k8',
                'odcinek-8': 'https://www.youtube.com/watch?v=ZSqdPU6eQhQ',
                'odcinek-9': 'https://www.youtube.com/watch?v=QVpbIbKgu14',
                'odcinek-10': 'https://www.youtube.com/watch?v=yYhr4yuTX5M',
                'odcinek-11': 'https://www.youtube.com/watch?v=GbpGytJ9nCA',
                'odcinek-12': 'https://www.youtube.com/watch?v=F6kaVFHPT6w',
                'odcinek-13': 'https://www.youtube.com/watch?v=64ba0-qNTXY',
                'odcinek-14': 'https://www.youtube.com/watch?v=9jxFIjpK0qA',
                'odcinek-15': 'https://www.youtube.com/watch?v=I4nyFObTGt0',
                'odcinek-16': 'https://www.youtube.com/watch?v=7Vr7ZVlkqgg',
                'odcinek-17': 'https://www.youtube.com/watch?v=ot92VHoq_k8',
                'odcinek-18': 'https://www.youtube.com/watch?v=ZSqdPU6eQhQ',
                'odcinek-19': 'https://www.youtube.com/watch?v=QVpbIbKgu14',
                'odcinek-20': 'https://www.youtube.com/watch?v=yYhr4yuTX5M',
                'odcinek-21': 'https://www.youtube.com/watch?v=GbpGytJ9nCA',
                'odcinek-22': 'https://www.youtube.com/watch?v=F6kaVFHPT6w',
                'odcinek-23': 'https://www.youtube.com/watch?v=64ba0-qNTXY',
                'odcinek-24': 'https://www.youtube.com/watch?v=9jxFIjpK0qA',
                'odcinek-25': 'https://www.youtube.com/watch?v=I4nyFObTGt0',
                'odcinek-26': 'https://www.youtube.com/watch?v=7Vr7ZVlkqgg',
                'odcinek-27': 'https://www.youtube.com/watch?v=ot92VHoq_k8',
                'odcinek-28': 'https://www.youtube.com/watch?v=ZSqdPU6eQhQ',
                'odcinek-29': 'https://www.youtube.com/watch?v=QVpbIbKgu14',
                'odcinek-30': 'https://www.youtube.com/watch?v=yYhr4yuTX5M',
                'odcinek-31': 'https://www.youtube.com/watch?v=GbpGytJ9nCA',
                'odcinek-32': 'https://www.youtube.com/watch?v=F6kaVFHPT6w',
                'odcinek-33': 'https://www.youtube.com/watch?v=64ba0-qNTXY',
                'odcinek-34': 'https://www.youtube.com/watch?v=9jxFIjpK0qA',
                'odcinek-35': 'https://www.youtube.com/watch?v=I4nyFObTGt0',
                'odcinek-36': 'https://www.youtube.com/watch?v=7Vr7ZVlkqgg',
                'odcinek-37': 'https://www.youtube.com/watch?v=ot92VHoq_k8',
                'odcinek-38': 'https://www.youtube.com/watch?v=ZSqdPU6eQhQ',
                'odcinek-39': 'https://www.youtube.com/watch?v=QVpbIbKgu14',
                'odcinek-40': 'https://www.youtube.com/watch?v=yYhr4yuTX5M',
                'odcinek-41': 'https://www.youtube.com/watch?v=GbpGytJ9nCA',
                'odcinek-42': 'https://www.youtube.com/watch?v=F6kaVFHPT6w',
                'odcinek-43': 'https://www.youtube.com/watch?v=64ba0-qNTXY',
                'odcinek-44': 'https://www.youtube.com/watch?v=9jxFIjpK0qA',
                'odcinek-45': 'https://www.youtube.com/watch?v=I4nyFObTGt0',
                'odcinek-46': 'https://www.youtube.com/watch?v=7Vr7ZVlkqgg',
                'odcinek-47': 'https://www.youtube.com/watch?v=ot92VHoq_k8',
                'odcinek-48': 'https://www.youtube.com/watch?v=ZSqdPU6eQhQ',
                'odcinek-49': 'https://www.youtube.com/watch?v=QVpbIbKgu14',
                'odcinek-50': 'https://www.youtube.com/watch?v=yYhr4yuTX5M',
                'odcinek-51': 'https://www.youtube.com/watch?v=GbpGytJ9nCA',
                'odcinek-52': 'https://www.youtube.com/watch?v=F6kaVFHPT6w'
                
            },
            'season2': {
                'odcinek-1': 'https://www.youtube.com/watch?v=GbpGytJ9nCA',
                'odcinek-2': 'https://www.youtube.com/watch?v=F6kaVFHPT6w',
                'odcinek-3': 'https://www.youtube.com/watch?v=64ba0-qNTXY',
                'odcinek-4': 'https://www.youtube.com/watch?v=9jxFIjpK0qA',
                'odcinek-5': 'https://www.youtube.com/watch?v=I4nyFObTGt0',
                'odcinek-6': 'https://www.youtube.com/watch?v=7Vr7ZVlkqgg',
                'odcinek-7': 'https://www.youtube.com/watch?v=ot92VHoq_k8',
                'odcinek-8': 'https://www.youtube.com/watch?v=ZSqdPU6eQhQ',
                'odcinek-9': 'https://www.youtube.com/watch?v=QVpbIbKgu14',
                'odcinek-10': 'https://www.youtube.com/watch?v=yYhr4yuTX5M',
                'odcinek-11': 'https://www.youtube.com/watch?v=GbpGytJ9nCA',
                'odcinek-12': 'https://www.youtube.com/watch?v=F6kaVFHPT6w',
                'odcinek-13': 'https://www.youtube.com/watch?v=64ba0-qNTXY',
                'odcinek-14': 'https://www.youtube.com/watch?v=9jxFIjpK0qA',
                'odcinek-15': 'https://www.youtube.com/watch?v=I4nyFObTGt0',
                'odcinek-16': 'https://www.youtube.com/watch?v=7Vr7ZVlkqgg',
                'odcinek-17': 'https://www.youtube.com/watch?v=ot92VHoq_k8',
                'odcinek-18': 'https://www.youtube.com/watch?v=ZSqdPU6eQhQ',
                'odcinek-19': 'https://www.youtube.com/watch?v=QVpbIbKgu14',
                'odcinek-20': 'https://www.youtube.com/watch?v=yYhr4yuTX5M',
                'odcinek-21': 'https://www.youtube.com/watch?v=GbpGytJ9nCA',
                'odcinek-22': 'https://www.youtube.com/watch?v=F6kaVFHPT6w',
                'odcinek-23': 'https://www.youtube.com/watch?v=64ba0-qNTXY',
                'odcinek-24': 'https://www.youtube.com/watch?v=9jxFIjpK0qA',
                'odcinek-25': 'https://www.youtube.com/watch?v=I4nyFObTGt0',
                'odcinek-26': 'https://www.youtube.com/watch?v=7Vr7ZVlkqgg',
                'odcinek-27': 'https://www.youtube.com/watch?v=ot92VHoq_k8',
                'odcinek-28': 'https://www.youtube.com/watch?v=ZSqdPU6eQhQ',
                'odcinek-29': 'https://www.youtube.com/watch?v=QVpbIbKgu14',
                'odcinek-30': 'https://www.youtube.com/watch?v=yYhr4yuTX5M',
                'odcinek-31': 'https://www.youtube.com/watch?v=GbpGytJ9nCA',
                'odcinek-32': 'https://www.youtube.com/watch?v=F6kaVFHPT6w',
                'odcinek-33': 'https://www.youtube.com/watch?v=64ba0-qNTXY',
                'odcinek-34': 'https://www.youtube.com/watch?v=9jxFIjpK0qA',
                'odcinek-35': 'https://www.youtube.com/watch?v=I4nyFObTGt0',
                'odcinek-36': 'https://www.youtube.com/watch?v=7Vr7ZVlkqgg',
                'odcinek-37': 'https://www.youtube.com/watch?v=ot92VHoq_k8',
                'odcinek-38': 'https://www.youtube.com/watch?v=ZSqdPU6eQhQ',
                'odcinek-39': 'https://www.youtube.com/watch?v=QVpbIbKgu14',
                'odcinek-40': 'https://www.youtube.com/watch?v=yYhr4yuTX5M',
                'odcinek-41': 'https://www.youtube.com/watch?v=GbpGytJ9nCA',
                'odcinek-42': 'https://www.youtube.com/watch?v=F6kaVFHPT6w',
                'odcinek-43': 'https://www.youtube.com/watch?v=64ba0-qNTXY',
                'odcinek-44': 'https://www.youtube.com/watch?v=9jxFIjpK0qA',
                'odcinek-45': 'https://www.youtube.com/watch?v=I4nyFObTGt0',
                'odcinek-46': 'https://www.youtube.com/watch?v=7Vr7ZVlkqgg',
                'odcinek-47': 'https://www.youtube.com/watch?v=ot92VHoq_k8',
                'odcinek-48': 'https://www.youtube.com/watch?v=ZSqdPU6eQhQ',
                'odcinek-49': 'https://www.youtube.com/watch?v=QVpbIbKgu14',
                'odcinek-50': 'https://www.youtube.com/watch?v=yYhr4yuTX5M',
                'odcinek-51': 'https://www.youtube.com/watch?v=GbpGytJ9nCA',
                'odcinek-52': 'https://www.youtube.com/watch?v=F6kaVFHPT6w'
            },
            'season3': {
                'odcinek-1': 'https://www.youtube.com/watch?v=GbpGytJ9nCA',
                'odcinek-2': 'https://www.youtube.com/watch?v=F6kaVFHPT6w',
                'odcinek-3': 'https://www.youtube.com/watch?v=64ba0-qNTXY',
                'odcinek-4': 'https://www.youtube.com/watch?v=9jxFIjpK0qA',
                'odcinek-5': 'https://www.youtube.com/watch?v=I4nyFObTGt0',
                'odcinek-6': 'https://www.youtube.com/watch?v=7Vr7ZVlkqgg',
                'odcinek-7': 'https://www.youtube.com/watch?v=ot92VHoq_k8',
                'odcinek-8': 'https://www.youtube.com/watch?v=ZSqdPU6eQhQ',
                'odcinek-9': 'https://www.youtube.com/watch?v=QVpbIbKgu14',
                'odcinek-10': 'https://www.youtube.com/watch?v=yYhr4yuTX5M',
                'odcinek-11': 'https://www.youtube.com/watch?v=GbpGytJ9nCA',
                'odcinek-12': 'https://www.youtube.com/watch?v=F6kaVFHPT6w',
                'odcinek-13': 'https://www.youtube.com/watch?v=64ba0-qNTXY',
                'odcinek-14': 'https://www.youtube.com/watch?v=9jxFIjpK0qA',
                'odcinek-15': 'https://www.youtube.com/watch?v=I4nyFObTGt0',
                'odcinek-16': 'https://www.youtube.com/watch?v=7Vr7ZVlkqgg',
                'odcinek-17': 'https://www.youtube.com/watch?v=ot92VHoq_k8',
                'odcinek-18': 'https://www.youtube.com/watch?v=ZSqdPU6eQhQ',
                'odcinek-19': 'https://www.youtube.com/watch?v=QVpbIbKgu14',
                'odcinek-20': 'https://www.youtube.com/watch?v=yYhr4yuTX5M',
                'odcinek-21': 'https://www.youtube.com/watch?v=GbpGytJ9nCA',
                'odcinek-22': 'https://www.youtube.com/watch?v=F6kaVFHPT6w',
                'odcinek-23': 'https://www.youtube.com/watch?v=64ba0-qNTXY',
                'odcinek-24': 'https://www.youtube.com/watch?v=9jxFIjpK0qA',
                'odcinek-25': 'https://www.youtube.com/watch?v=I4nyFObTGt0',
                'odcinek-26': 'https://www.youtube.com/watch?v=7Vr7ZVlkqgg',
                'odcinek-27': 'https://www.youtube.com/watch?v=ot92VHoq_k8',
                'odcinek-28': 'https://www.youtube.com/watch?v=ZSqdPU6eQhQ',
                'odcinek-29': 'https://www.youtube.com/watch?v=QVpbIbKgu14',
                'odcinek-30': 'https://www.youtube.com/watch?v=yYhr4yuTX5M',
                'odcinek-31': 'https://www.youtube.com/watch?v=GbpGytJ9nCA',
                'odcinek-32': 'https://www.youtube.com/watch?v=F6kaVFHPT6w',
                'odcinek-33': 'https://www.youtube.com/watch?v=64ba0-qNTXY',
                'odcinek-34': 'https://www.youtube.com/watch?v=9jxFIjpK0qA',
                'odcinek-35': 'https://www.youtube.com/watch?v=I4nyFObTGt0',
                'odcinek-36': 'https://www.youtube.com/watch?v=7Vr7ZVlkqgg',
                'odcinek-37': 'https://www.youtube.com/watch?v=ot92VHoq_k8',
                'odcinek-38': 'https://www.youtube.com/watch?v=ZSqdPU6eQhQ',
                'odcinek-39': 'https://www.youtube.com/watch?v=QVpbIbKgu14'
                
            },
            'season4': {
                'odcinek-1': 'https://www.youtube.com/watch?v=GbpGytJ9nCA',
                'odcinek-2': 'https://www.youtube.com/watch?v=F6kaVFHPT6w',
                'odcinek-3': 'https://www.youtube.com/watch?v=64ba0-qNTXY',
                'odcinek-4': 'https://www.youtube.com/watch?v=9jxFIjpK0qA',
                'odcinek-5': 'https://www.youtube.com/watch?v=I4nyFObTGt0',
                'odcinek-6': 'https://www.youtube.com/watch?v=7Vr7ZVlkqgg',
                'odcinek-7': 'https://www.youtube.com/watch?v=ot92VHoq_k8',
                'odcinek-8': 'https://www.youtube.com/watch?v=ZSqdPU6eQhQ',
                'odcinek-9': 'https://www.youtube.com/watch?v=QVpbIbKgu14',
                'odcinek-10': 'https://www.youtube.com/watch?v=yYhr4yuTX5M',
                'odcinek-11': 'https://www.youtube.com/watch?v=GbpGytJ9nCA',
                'odcinek-12': 'https://www.youtube.com/watch?v=F6kaVFHPT6w',
                'odcinek-13': 'https://www.youtube.com/watch?v=64ba0-qNTXY',
                'odcinek-14': 'https://www.youtube.com/watch?v=9jxFIjpK0qA',
                'odcinek-15': 'https://www.youtube.com/watch?v=I4nyFObTGt0',
                'odcinek-16': 'https://www.youtube.com/watch?v=7Vr7ZVlkqgg',
                'odcinek-17': 'https://www.youtube.com/watch?v=ot92VHoq_k8',
                'odcinek-18': 'https://www.youtube.com/watch?v=ZSqdPU6eQhQ',
                'odcinek-19': 'https://www.youtube.com/watch?v=QVpbIbKgu14',
                'odcinek-20': 'https://www.youtube.com/watch?v=yYhr4yuTX5M',
                'odcinek-21': 'https://www.youtube.com/watch?v=GbpGytJ9nCA',
                'odcinek-22': 'https://www.youtube.com/watch?v=F6kaVFHPT6w',
                'odcinek-23': 'https://www.youtube.com/watch?v=64ba0-qNTXY',
                'odcinek-24': 'https://www.youtube.com/watch?v=9jxFIjpK0qA',
                'odcinek-25': 'https://www.youtube.com/watch?v=I4nyFObTGt0',
                'odcinek-26': 'https://www.youtube.com/watch?v=7Vr7ZVlkqgg',
                'odcinek-27': 'https://www.youtube.com/watch?v=ot92VHoq_k8',
                'odcinek-28': 'https://www.youtube.com/watch?v=ZSqdPU6eQhQ',
                'odcinek-29': 'https://www.youtube.com/watch?v=QVpbIbKgu14',
                'odcinek-30': 'https://www.youtube.com/watch?v=yYhr4yuTX5M',
                'odcinek-31': 'https://www.youtube.com/watch?v=GbpGytJ9nCA',
                'odcinek-32': 'https://www.youtube.com/watch?v=F6kaVFHPT6w',
                'odcinek-33': 'https://www.youtube.com/watch?v=64ba0-qNTXY',
                'odcinek-34': 'https://www.youtube.com/watch?v=9jxFIjpK0qA',
                'odcinek-35': 'https://www.youtube.com/watch?v=I4nyFObTGt0',
                'odcinek-36': 'https://www.youtube.com/watch?v=7Vr7ZVlkqgg',
                'odcinek-37': 'https://www.youtube.com/watch?v=ot92VHoq_k8',
                'odcinek-38': 'https://www.youtube.com/watch?v=ZSqdPU6eQhQ',
                'odcinek-39': 'https://www.youtube.com/watch?v=QVpbIbKgu14',
                'odcinek-40': 'https://www.youtube.com/watch?v=yYhr4yuTX5M',
                'odcinek-41': 'https://www.youtube.com/watch?v=GbpGytJ9nCA',
                'odcinek-42': 'https://www.youtube.com/watch?v=F6kaVFHPT6w',
                'odcinek-43': 'https://www.youtube.com/watch?v=64ba0-qNTXY',
                'odcinek-44': 'https://www.youtube.com/watch?v=9jxFIjpK0qA',
                'odcinek-45': 'https://www.youtube.com/watch?v=I4nyFObTGt0',
                'odcinek-46': 'https://www.youtube.com/watch?v=7Vr7ZVlkqgg'
               
            }
        },
        'chima': {
            'season1': {
                'odcinek-1': 'https://www.youtube.com/watch?v=BY5FnnDI6yg',
                'odcinek-2': 'https://www.youtube.com/watch?v=MCg_5_iEcBg',
                'odcinek-3': 'https://www.youtube.com/watch?v=lrzCW2sVflw',
                'odcinek-4': 'https://www.youtube.com/watch?v=qTz_thmkWpc',
                'odcinek-5': 'https://www.youtube.com/watch?v=zIMCGMUTrHA',
                'odcinek-6': 'https://www.youtube.com/watch?v=0D4elyANYb0',
                'odcinek-7': 'https://www.youtube.com/watch?v=GFwQapWdGDg',
                'odcinek-8': 'https://www.youtube.com/watch?v=Udb783n54NQ',
                'odcinek-9': 'https://www.youtube.com/watch?v=7cic9zaSViY',
                'odcinek-10': 'https://www.youtube.com/watch?v=7J5kWkSUz-s',
                'odcinek-11': 'https://www.youtube.com/watch?v=6WdK53WP5gk',
                'odcinek-12': 'https://www.youtube.com/watch?v=cUnyPwJpKn4',
                'odcinek-13': 'https://www.youtube.com/watch?v=TBJm3yK0zeA',
                'odcinek-14': 'https://www.youtube.com/watch?v=FY5QzSYjrsk',
                'odcinek-15': 'https://www.youtube.com/watch?v=gSo8ddBRwtQ',
                'odcinek-16': 'https://www.youtube.com/watch?v=2YeuNfOk8bE',
                'odcinek-17': 'https://www.youtube.com/watch?v=tcUmixy4PLM',
                'odcinek-18': 'https://www.youtube.com/watch?v=TZ2-Mhunv6k',
                'odcinek-19': 'https://www.youtube.com/watch?v=9rx-r3eDIII',
                'odcinek-20': 'https://www.youtube.com/watch?v=dkjzMYWmQiM'
            },
            'season2': {
                'odcinek-1': 'https://www.youtube.com/watch?v=3o2NyRPYQk8',
                'odcinek-2': 'https://www.youtube.com/watch?v=v7EAtl7mvOE',
                'odcinek-3': 'https://www.youtube.com/watch?v=2ycTBUUpeAM',
                'odcinek-4': 'https://www.youtube.com/watch?v=9gu_CNGqPnc',
                'odcinek-5': 'https://www.youtube.com/watch?v=-BE6IjQ5EgU',
                'odcinek-6': 'https://www.youtube.com/watch?v=OoHMKOihIX8'
                
            },
            'season3': {
                'odcinek-1': 'https://www.youtube.com/watch?v=hW9g4fE81sE',
                'odcinek-2': 'https://www.youtube.com/watch?v=k3jZxhbcRtE',
                'odcinek-3': 'https://www.youtube.com/watch?v=NjdfW1-g2HU',
                'odcinek-4': 'https://www.youtube.com/watch?v=rsd7HHaYs4c',
                'odcinek-5': 'https://www.youtube.com/watch?v=-JlJHrXBzGg',
                'odcinek-6': 'https://www.youtube.com/watch?v=RVSzpAMHDxY',
                'odcinek-7': 'https://www.youtube.com/watch?v=ALTaZ_XdLCU',
                'odcinek-8': 'https://www.youtube.com/watch?v=QU_ef0oKbSA',
                'odcinek-9': 'https://www.youtube.com/watch?v=Hf7HBogVAPw',
                'odcinek-10': 'https://www.youtube.com/watch?v=1LkAOJlX2Bg',
                'odcinek-11': 'https://www.youtube.com/watch?v=zXJcQN30MB4',
                'odcinek-12': 'https://www.youtube.com/watch?v=3VBVX7_d8e8',
                'odcinek-13': 'https://www.youtube.com/watch?v=ay_bX7G-dYc',
                'odcinek-14': 'https://www.youtube.com/watch?v=AFYgvKZrXfs',
                'odcinek-15': 'https://www.youtube.com/watch?v=9MQcbJV0yeI'
                
            }
        }

    };

    return urls[series] && urls[series][season] && urls[series][season][episode] || '#';
}
