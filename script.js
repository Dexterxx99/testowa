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
    if (['lego-nexo-knights', 'slugterra', 'generator-rex', 'lego-ninjago', 'bakugan', 'chima','danny'].includes(selectedValue)) {
        const seasons = {
            'lego-nexo-knights': ['Sezon 1', 'Sezon 2', 'Sezon 3', 'Sezon 4'],
            'slugterra': ['Sezon 1', 'Sezon 2', 'Sezon 3', 'Sezon 4'],
            'generator-rex': ['Sezon 1', 'Sezon 2', 'Sezon 3'],
            'lego-ninjago': ['Sezon 1','Sezon 2','Sezon 3','Sezon 4','Sezon 5','Sezon 6','Sezon 7','Sezon 8','Sezon 9','Sezon 10','Sezon 11','Sezon 12','Sezon 13','Sezon 14','Sezon 15','Sezon 16'],
            'bakugan': ['Sezon 1','Sezon 2','Sezon 3','Sezon 4'],
            'chima': ['Sezon 1','Sezon 2','Sezon 3'],
            'danny': ['Sezon 1','Sezon 2','Sezon 3']
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
        },
        'danny': {
            'season1': Array.from({ length:20}, (_, i) => `Odcinek ${i + 1}`),
            'season2': Array.from({ length:18}, (_, i) => `Odcinek ${i + 1}`),
            'season3': Array.from({ length:7}, (_, i) => `Odcinek ${i + 1}`),
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
            updateNavigationButtons(episodeSelect);
        }
    } else {
        episodeContainer.style.display = 'none';
    }

    episodeSelect.addEventListener('change', function() {
        const selectedEpisode = this.value;
        updateVideoLinks(series, season, selectedEpisode);
        updateNavigationButtons(this);
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

function updateNavigationButtons(episodeSelect) {
    const prevButton = document.getElementById('prev-episode');
    const nextButton = document.getElementById('next-episode');

    const currentIndex = Array.from(episodeSelect.options).findIndex(option => option.value === episodeSelect.value);

    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === episodeSelect.options.length - 1;

    prevButton.onclick = function() {
        if (currentIndex > 0) {
            episodeSelect.selectedIndex = currentIndex - 1;
            episodeSelect.dispatchEvent(new Event('change'));
        }
    };

    nextButton.onclick = function() {
        if (currentIndex < episodeSelect.options.length - 1) {
            episodeSelect.selectedIndex = currentIndex + 1;
            episodeSelect.dispatchEvent(new Event('change'));
        }
    };
}



function getVideoUrl(series, season, episode) {
    // Zwraca odpowiedni URL na podstawie wyboru
    const urls = {
        'lego-nexo-knights': {
            'season1': {
                'odcinek-1': 'https://drive.google.com/file/d/1e7rkIlS6Z6xmCCGZUPUes3CdBKxZMpO7/view',
                'odcinek-2': 'https://drive.google.com/file/d/1RpcQTQJV1pkDbjuYKyD0Enx9ZEcKsPmQ/view',
                'odcinek-3': 'https://drive.google.com/file/d/1ZBV-aZSTUvDkSy4OtJ-w9eGwGAqoZ2i2/view',
                'odcinek-4': 'https://drive.google.com/file/d/1KZHDfV9dVvfVXeyVNAT2NJ8qmb2Mi2nE/view',
                'odcinek-5': 'https://drive.google.com/file/d/1shu7zvkkGXgaRh_KLbMI_zXvITOAuUpS/view',
                'odcinek-6': 'https://drive.google.com/file/d/1Q1JDe7xETws6xpGwfBsKohcq18seUtbX/view',
                'odcinek-7': 'https://drive.google.com/file/d/1v0i4GVEGyCBagw6M3ob6O3R5R16TLJdt/view',
                'odcinek-8': 'https://drive.google.com/file/d/1cidyKejww5n-xGWFAcuV_WbAGiVL8hUz/view',
                'odcinek-9': 'https://drive.google.com/file/d/17JM804-_EerAbse45MaIv4vQCVG3mBTj/view',
                'odcinek-10': 'https://drive.google.com/file/d/1PpanT4qacyI-j8I6NX-7INOSWGWYgUhY/view'
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
                'odcinek-1': 'https://drive.google.com/file/d/1RnKjl8cJHxX-Er8qkH1GQRWCLTh0-vfQ/view',
                'odcinek-2': 'https://drive.google.com/file/d/1G1fPbjq9vUG5RlgAYnY6evs-eN0QheT7/view',
                'odcinek-3': 'https://drive.google.com/file/d/1WujOZyCcqr7Uoxw45nUAitLWVCYFDRka/view',
                'odcinek-4': 'https://drive.google.com/file/d/174kMhJs1-pPStbNKSv2BHjOADFXNeSC2/view',
                'odcinek-5': 'https://drive.google.com/file/d/1Da-Rg5S1xDEnrmkTpsH4DR3CX2gb4ccd/view',
                'odcinek-6': 'https://drive.google.com/file/d/1mGyBZFsw4SZ6bHDOO0h4yNiRKiC0bqox/view',
                'odcinek-7': 'https://drive.google.com/file/d/1S8f-hazq3zIzxCi3nN24bHuT_105mdRl/view',
                'odcinek-8': 'https://drive.google.com/file/d/1y1wqUiTWtBhBhIk8T6mPIf5mT_OclTG3/view',
                'odcinek-9': 'https://drive.google.com/file/d/1-OAwOmSHj-gaShYU4s15FM76NV9YT9kz/view',
                'odcinek-10': 'https://drive.google.com/file/d/14PBTE-3qgLSC3dUln5EkGzz_77HDLwjV/view',
                'odcinek-11': 'https://drive.google.com/file/d/1mNBkYTY0YJEB_n0iRAiXM7HvGJmDBgMw/view',
                'odcinek-12': 'https://drive.google.com/file/d/1wvQOwIykIQcUi_lC66eC-NOt8_zp1Ika/view',
                'odcinek-13': 'https://drive.google.com/file/d/1wvQOwIykIQcUi_lC66eC-NOt8_zp1Ika/view'
            },
            'season2': {
                'odcinek-1': 'https://drive.google.com/file/d/13xs9Fa6zJBtssMsx15oFPhEfp804wyKS/view',
                'odcinek-2': 'https://drive.google.com/file/d/1SqMHWrbiaT05BVei33iAg3cd1aUyX5dJ/view',
                'odcinek-3': 'https://drive.google.com/file/d/1abGizu6VDchFc_X7yDUc_w8AUxp2dz9u/view',
                'odcinek-4': 'https://drive.google.com/file/d/1fJmqnnFaDPkSAayc7yyj2DWy72bIWqIa/view',
                'odcinek-5': 'https://drive.google.com/file/d/1KGqm81X-u9brY3UgwUIBDy0kDaiklGz1/view',
                'odcinek-6': 'https://drive.google.com/file/d/1EHtxCuF1HwoTXMbdQzE9AAjNaPya4Ood/view',
                'odcinek-7': 'https://drive.google.com/file/d/1juwKVgvhnuzPvWky2lKg_wylJ2TajEoH/view',
                'odcinek-8': 'https://drive.google.com/file/d/1VFu2wu7xpW_bnXdMg0l7S74XfUk2HPfw/view',
                'odcinek-9': 'https://drive.google.com/file/d/1WzvQV2qw-v25zuiF-DmcpmycoKRPyZEc/view',
                'odcinek-10': 'https://drive.google.com/file/d/1BguoBJBRpLLw6VCW5qMIqBzxYLaIWWAM/view',
                'odcinek-11': 'https://drive.google.com/file/d/1LdWEGJFmsi2Y7feU7EunvanDHlG63iE9/view',
                'odcinek-12': 'https://drive.google.com/file/d/1cl0646sg1qceLftzuLprBuDJiaYG4Oqr/view',
                'odcinek-13': 'https://drive.google.com/file/d/1hi8TBOyO2YSBKOMnaog6Iu61qYEjHU_U/view',
                'odcinek-14': 'https://drive.google.com/file/d/14RsGwDIMFD_GCI5Q78Vjb2-QqWdzdEbD/view',
                'odcinek-15': 'https://drive.google.com/file/d/1QfXrEvx07n4BTUKbzY9VnAvAGqfwmyyh/view',
                'odcinek-16': 'https://drive.google.com/file/d/12X0smM__RF4TkIHLdRpqlGxjqRW2TGwH/view'
            },
            'season3': {
                'odcinek-1': 'https://drive.google.com/file/d/19PoTH4SMEaVwOLiuvGezXq1ZHMz-mmO2/view',
                'odcinek-2': 'https://drive.google.com/file/d/1K3rJVNq33zi1AQkJYj8TkAfr-MMbbVuk/view',
                'odcinek-3': 'https://drive.google.com/file/d/1bwXNZcIWNSSni6j4qjD2QzFW5b-G9ap-/view',
                'odcinek-4': 'https://drive.google.com/file/d/1IkeOq8ZgA3ZqwuVcwe1r-1YZgqftMOH4/view',
                'odcinek-5': 'https://drive.google.com/file/d/1XbIqauAY7s_IpCXDlqXv4DtjV__lG5H7/view',
                'odcinek-6': 'https://drive.google.com/file/d/1h_pnoKnMiAlCH7_7tbRRc2SR0rJeOfFr/view',
                'odcinek-7': 'https://drive.google.com/file/d/1mq3GJBMCKOkusuWMGUx4fwYFrcom9HCr/view',
                'odcinek-8': 'https://drive.google.com/file/d/1cGa6sLQ-X-gvkY_1esokBvAlBxRk7OPX/view',
                'odcinek-9': 'https://drive.google.com/file/d/17GYzchEi7rUrCorJQV0PVxQKTYNljSzo/view',
                'odcinek-10': 'https://drive.google.com/file/d/11ko1NzT777-H4otLDz-zYVsrm1vDDlGQ/view'
            },
            'season4': {
                'odcinek-1': 'https://drive.google.com/file/d/1g7D6PkAlTkpnGraeciL2bF-zizwxCliT/view',
                'odcinek-2': 'https://drive.google.com/file/d/1j5u1SKB3akHVbaLgmybbHmnKtVKw38Nt/view',
                'odcinek-3': 'https://drive.google.com/file/d/1De-WTzen9ZLztCpm8m_vsA2LszpmDA7n/view',
                'odcinek-4': 'https://drive.google.com/file/d/1TgCQhAXMTMgZKOapCFUn8sVCr2fyCb81/view',
                'odcinek-5': 'https://drive.google.com/file/d/1ln44JVYWuXWYFqOjE6O5Dnp_0x3XA_jL/view',
                'odcinek-6': 'https://drive.google.com/file/d/1TrRUnaNFPWwFXDnEKLIj54FViSLGTRzn/view',
                'odcinek-7': 'https://drive.google.com/file/d/16EnMNjDrSQVHwIYDleL3jkLFh2dHLoFh/view',
                'odcinek-8': 'https://drive.google.com/file/d/1IS4nlYCBeHJozwf0S7kM35XpzZImIlqR/view',
                'odcinek-9': 'https://drive.google.com/file/d/17iD--Du74C1L26yeMdfpZWC29_xBJQJu/view',
                'odcinek-10': 'https://drive.google.com/file/d/1m2Q5SXJHrIpV6CpMIs6Z5u_ry9Y8piqt/view',
                'odcinek-11': 'https://drive.google.com/file/d/1Rlkk8pBk6vbAvK3E-z8_tafR0EsXbvvX/view',
                'odcinek-12': 'https://drive.google.com/file/d/1uW3jU6r-q9fsX35F-dLU9ZGUZ8gNAbrz/view',
                'odcinek-13': 'https://drive.google.com/file/d/1GVlUCsub0R_pqLGHnilD5-egSZTT9s86/view'
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
                'odcinek-1': 'https://drive.google.com/file/d/1XIblNKk6ATESRyB5O5_g0fwsMbXSxQCA/view',
                'odcinek-2': 'https://drive.google.com/file/d/1C8h9olA7ZYQKgrCsndaqUv2F2_JJzhhw/view',
                'odcinek-3': 'https://drive.google.com/file/d/1XNd08RUnjV_SNdwrZgV--6qBTgLs8J9W/view',
                'odcinek-4': 'https://drive.google.com/file/d/18rzBUMSyyjjQ7XjPhAWdb17_72X28XgV/view',
                'odcinek-5': 'https://drive.google.com/file/d/122DIupmZxV7MmIaRSejLrVWXpO-4D2v0/view',
                'odcinek-6': 'https://drive.google.com/file/d/1lQSKdczuTvc3K2v8LBFl0rMv4OXuP8Z4/view',
                'odcinek-7': 'https://drive.google.com/file/d/1SmfvdqrWhEHJp0CiEL3zFmIRR7e8-4_N/view',
                'odcinek-8': 'https://drive.google.com/file/d/1aq0zaT7mtad_RpoIqZGHCkOfeeZ_dSRo/view',
                'odcinek-9': 'https://drive.google.com/file/d/1lg_rDE4uPx_rJaHxxVRDhpXpl7fYCrXe/view',
                'odcinek-10': 'https://drive.google.com/file/d/1g_djb2lTTRhj76ZiyFWhp40RkwA2QgBH/view',
                'odcinek-11': 'https://drive.google.com/file/d/12G4Frvfr0fTRg8LJpHcf8B9UUSNNJ9tP/view',
                'odcinek-12': 'https://drive.google.com/file/d/1JOsSkhQYjXszlB4MtFS5mekNPH8IFaf2/view',
                'odcinek-13': 'https://drive.google.com/file/d/1fI-_PPBePxGlRum80gpg_KcEX1MVAgqx/view'
                
            },
            'season2': {
                'odcinek-1': 'https://drive.google.com/file/d/1EEUY1GL9TB41GfrV0UHvDJUZnkzPqsj8/view',
                'odcinek-2': 'https://drive.google.com/file/d/1K3wD_4NvjpgW-Nd_ghLgHmrcxAgPfSTb/view',
                'odcinek-3': 'https://drive.google.com/file/d/18mbpYT7_da64uKipTiS4hc3olw1rcGp9/view',
                'odcinek-4': 'https://drive.google.com/file/d/1G9R4bE09sjFi-IN8dizcssFG0rsARJmu/view',
                'odcinek-5': 'https://drive.google.com/file/d/1AXujULc62esTr6ews7sSRq8_834UgD-q/view',
                'odcinek-6': 'https://drive.google.com/file/d/1jKVg2Taotd8xyAtmG6joTt50l8m2nSeU/view',
                'odcinek-7': 'https://drive.google.com/file/d/1_tb2nq-1vxkEPYS5TijYfTkOOA0pvTQp/view',
                'odcinek-8': 'https://drive.google.com/file/d/1c0gKnEDSy85SX_6y49t0hjBQk_dUDoNk/view',
                'odcinek-9': 'https://drive.google.com/file/d/12ZzUp9qJlkubU5sDx6LA0WeZxuDlANe_/view',
                'odcinek-10': 'https://drive.google.com/file/d/1_9Q3K1TyB8Ej4ASMJ_y-oTah7CwYo0F_/view',
                'odcinek-11': 'https://drive.google.com/file/d/1vNBkPHZImHwb_xnYracG5XjhKeeZigrH/view',
                'odcinek-12': 'https://drive.google.com/file/d/1YxDRScCzGRj-VxyrwPDFc5fSzQ4oq60j/view',
                'odcinek-13': 'https://drive.google.com/file/d/1Td5ajBnAwRfNX9L8htpIOjbf6ifBb_Ud/view',
                
            },
            'season3': {
                'odcinek-1': 'https://drive.google.com/file/d/1V_9ju98uo2i1h5yz-wAMDLWyUAU2rt06/view',
                'odcinek-2': 'https://drive.google.com/file/d/1dGiLNHUWXdTbqccwAUCfSSOXbGxp4jKJ/view',
                'odcinek-3': 'https://drive.google.com/file/d/1oqJLPdYu5vQ3T04GuaLoB4vH-AOwL86N/view',
                'odcinek-4': 'https://drive.google.com/file/d/1s1vtCVpbo8-fqo48Re92LqAUs6sg7gRp/view',
                'odcinek-5': 'https://drive.google.com/file/d/1HtVCEoCCscT8v8j-kYP0nPghXVG8clHN/view',
                'odcinek-6': 'https://drive.google.com/file/d/1Wc84szo4ai0lxq4HBy8PuBEzIgcLH9_e/view',
                'odcinek-7': 'https://drive.google.com/file/d/1GH-aFi9pwiZwSYNBU0AOHNR8nolKy7v8/view',
                'odcinek-8': 'https://drive.google.com/file/d/15PHVpYsF19r5fklwKnB2RvEhMgeiPvym/view',
            },
            'season4': {
                'odcinek-1': 'https://drive.google.com/file/d/1PHIufPC_tZsw3hqkJ4rIY5vOVzLdW2Nv/view',
                'odcinek-2': 'https://drive.google.com/file/d/1BFn_xDOpen5ddahGwyHQHlY_E2AoRbbt/view',
                'odcinek-3': 'https://drive.google.com/file/d/1ZLfyg4vJhu-GE4YDr-VL7ZsmR6iSUzmt/view',
                'odcinek-4': 'https://drive.google.com/file/d/17RjKqffCPRJIcqIEU1Py0zw9C6QvsC30/view',
                'odcinek-5': 'https://drive.google.com/file/d/1XfG98__dvETzOs-RJVot3vqH2xV6BmwM/view',
                'odcinek-6': 'https://drive.google.com/file/d/1Xxw2Wdv0dSAhOwOE1qr4OYoy0lebzlX4/view',
                'odcinek-7': 'https://drive.google.com/file/d/1ATIcWVLG6inoMAjpdvF4aFnHpmp09KTR/view',
                'odcinek-8': 'https://drive.google.com/file/d/1YFc14Lz-3lFwTAdRYWLvYvEzuL_8CFjB/view',
                'odcinek-9': 'https://drive.google.com/file/d/1P1a3e98tGCaAm6heQIlQfG52tyohcS9A/view',
                'odcinek-10': 'https://drive.google.com/file/d/1rm4dAl1YtFxxx3Sy3ydvo6y9921wHvGy/view',
            },
            'season5': {
                'odcinek-1': 'https://drive.google.com/file/d/1kYPvy77DCBUo8cDgJbPcYGAgYYZMbc_9/view',
                'odcinek-2': 'https://drive.google.com/file/d/1noinbq-dsBC-3y-cHpFixUXnriCbNHJA/view',
                'odcinek-3': 'https://drive.google.com/file/d/1Q-fyxHaLXxvg4DQQ3GaYq8HZTIxhp9vP/view',
                'odcinek-4': 'https://drive.google.com/file/d/1-sfELq1-pv1ZdlGTfwr55sWew0b_dwTh/view',
                'odcinek-5': 'https://drive.google.com/file/d/1lhc_FWjYaEZTUDJ5oRgCys5yjCehOE_a/view',
                'odcinek-6': 'https://drive.google.com/file/d/1XqLPZ4WhLn0u1Y_ltYIxEzDKtVyaLsQh/view',
                'odcinek-7': 'https://drive.google.com/file/d/1Jfceqnkz_1apqFjNkwDfs2UPZxB8d54k/view',
                'odcinek-8': 'https://drive.google.com/file/d/1KrSDGEyL2CkUNJbPWmyG1ghTHd6a8PUO/view',
                'odcinek-9': 'https://drive.google.com/file/d/1hOGaB9w5p9_zKdPZG1K_qyTPuRwOXsef/view',
                'odcinek-10': 'https://drive.google.com/file/d/1oxd7UsBqHm3AQtRLQoelF_bwsNJEJqyG/view',
            },
            'season6': {
                'odcinek-1': 'https://drive.google.com/file/d/1fe5FOGdR3f2zdtPzMT1R56tlm8baaN0Q/view',
                'odcinek-2': 'https://drive.google.com/file/d/1-aqHiDbeM8ILcVd5HELwum0XkSaGU8g5/view',
                'odcinek-3': 'https://drive.google.com/file/d/1L1qzGnmcPS3FH9-9oYCSMVI0l5sU0JqP/view',
                'odcinek-4': 'https://drive.google.com/file/d/1OrSoR8IY6uyaYJ5beaL77Dac7DCXF33y/view',
                'odcinek-5': 'https://drive.google.com/file/d/17oO1hxIxFnVcYrmKGet421xeJa-Qe0vd/view',
                'odcinek-6': 'https://drive.google.com/file/d/1nMukJo5pOMmYPfu494rrHZqfmn6Pw9Ux/view',
                'odcinek-7': 'https://drive.google.com/file/d/1ivuLHoD_DO-LeBE170b7ArsHqTid9U1N/view',
                'odcinek-8': 'https://drive.google.com/file/d/1lZJrHPYieYlYNzaEIRvQqjIWHJe7FB-k/view',
                'odcinek-9': 'https://drive.google.com/file/d/1LrGbKTmgXm7t5A2j1e4jLNGqZagvmkBv/view',
                'odcinek-10': 'https://drive.google.com/file/d/1RdGpOVPQ2x8CIAkNW006So5jwCC59Hjv/view',   
            },
            'season7': {
                'odcinek-1': 'https://drive.google.com/file/d/1XOa5ALkEydrJ4Q5NmmCoR6mM57YOuLE_/view',
                'odcinek-2': 'https://drive.google.com/file/d/1H1riWMEAqcqXDQbKbuyyI-ty4x4aZBFQ/view',
                'odcinek-3': 'https://drive.google.com/file/d/1Yg33sOl7xct6Zzii0jAWJJ0mImc6EmaJ/view',
                'odcinek-4': 'https://drive.google.com/file/d/1ZADeJW3hq0LaSpPbnoS0P838PANzqa7p/view',
                'odcinek-5': 'https://drive.google.com/file/d/1ZMRH8Y6m91FOAZRatFZAJIiMBWqdQWa2/view',
                'odcinek-6': 'https://drive.google.com/file/d/1TEhSr6qaIaxPq3Sq-h8yIXJQOOd1NbjJ/view',
                'odcinek-7': 'https://drive.google.com/file/d/1YNuRY5JhhrAs_SlWGszBJoQpZm2dEYWn/view',
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
                'odcinek-1': 'https://drive.google.com/file/d/1iEN79rI26Rt3s68AJ4aufuxIM7Jfq9Pm/view',
                'odcinek-2': 'https://drive.google.com/file/d/1fNiqw3HCvUPehuuUpbVjBlSz_YtnyrMy/view',
                'odcinek-3': 'https://drive.google.com/file/d/1iiMhFmmk8IEiTBMNYGX5UyrsvGbTyvgN/view',
                'odcinek-4': 'https://drive.google.com/file/d/1Aav92whsDoXWBxwXMic3Ji7DAUPHtnMo/view',
                'odcinek-5': 'https://drive.google.com/file/d/1Dn_7j8v15tC_soFvo_MSvBfI2VoO6b8g/view',
                'odcinek-6': 'https://drive.google.com/file/d/1RC84wVOJydd-GN7y9UIF3bEJhdJyqnZC/view',
                'odcinek-7': 'https://drive.google.com/file/d/1ZIg1g-PbHZ7fsHa97W3cHslrx5iK2TSz/view',
                'odcinek-8': 'https://drive.google.com/file/d/11dYVYEjDPaptm4zy-Nm1-72lpVB0WRCM/view',
                'odcinek-9': 'https://drive.google.com/file/d/1ZLuAO7lrWjQsApCWWTN7tSgYDwYPnamY/view',
                'odcinek-10': 'https://drive.google.com/file/d/1pjBELPetbI-mMG3pBIfBV2OOTdIJXYQ-/view',
                'odcinek-11': 'https://drive.google.com/file/d/1HWz48kI8YABFxbaZMqRqUD81G-IdQ0fe/view',
                'odcinek-12': 'https://drive.google.com/file/d/1ywOv_YpbhFb9cWGZbd2pAPnTLWDQ3H_V/view',
                'odcinek-13': 'https://drive.google.com/file/d/1fVykEJF7YQGskk9H7cFJa61AGTdOQdg_/view',
                'odcinek-14': 'https://drive.google.com/file/d/1NOlNFwdpXH8hkeXq4B-IfZjEhaWQwFug/view',
                'odcinek-15': 'https://drive.google.com/file/d/1DlULe1yHpd1Q5XgHQOF812Urcyw2ct_S/view',
                'odcinek-16': 'https://drive.google.com/file/d/1RKt_0eRMQ8i9lwthfApxWc0QGUz4antr/view',
                'odcinek-17': 'https://drive.google.com/file/d/1zudiREYbeorQb_odBOBbSIc4-nfZduwF/view',
                'odcinek-18': 'https://drive.google.com/file/d/12YMNsfMwG9f5xlc17JB1TLm_0L-R-nyz/view',
                'odcinek-19': 'https://drive.google.com/file/d/1uXWEuBQNSQkpSy04wXdBuS4P9FcrlLrD/view',
                'odcinek-20': 'https://drive.google.com/file/d/1jaXjWRP3wZQgbttTBdVs5vNNpTjrAkz1/view',
                'odcinek-21': 'https://drive.google.com/file/d/1AtGNkc8XcvpPtGNVSUD5_LrJY31JL6IC/view',
                'odcinek-22': 'https://drive.google.com/file/d/1hccRDjISZc8sWU7-jEGH1K5MFvWwirED/view',
                'odcinek-23': 'https://drive.google.com/file/d/1uxVTjSnTlbFamfW4NsCaEQyxRduRpAbo/view',
                'odcinek-24': 'https://drive.google.com/file/d/1l0mgRxeSJviF7dv6vuAR1Sn1RHRo8Toa/view',
                'odcinek-25': 'https://drive.google.com/file/d/1fTOIce74ajHwWlDR4i0dSb_ml-BLEkLU/view',
                'odcinek-26': 'https://drive.google.com/file/d/1yZTdhpxdnhYrtcr6hM3LLUBAOHJt-VK7/view',
                'odcinek-27': 'https://drive.google.com/file/d/1xvmhAL2HOhOp0wSOJvatPcgBS52ABjKS/view',
                'odcinek-28': 'https://drive.google.com/file/d/1lWRwNNB0FXwNi__8olbYeu5E9KJfmLv0/view',
                'odcinek-29': 'https://drive.google.com/file/d/1G_ByIeSQexk0wzSiVLQFIc43WfQakVVW/view',
                'odcinek-30': 'https://drive.google.com/file/d/1wYPtfbV7hnni9HFuNMXCvAACQVa3ppT5/view',
                'odcinek-31': 'https://drive.google.com/file/d/1juTa2AeEVec_1octGMnAnnl_ovolE9Zb/view',
                'odcinek-32': 'https://drive.google.com/file/d/1_70pIylKKCwSHRebDxxpZX1fLU1C5xP7/view',
                'odcinek-33': 'https://drive.google.com/file/d/18jqe4PILagvAkgZ8klUAHYeIZypvMj9n/view',
                'odcinek-34': 'https://drive.google.com/file/d/1GhMofQUkpo9WJ_PBJd79rVgPK5ttsFre/view',
                'odcinek-35': 'https://drive.google.com/file/d/1w9mHgnY-NONfMa3V41IDVYbLHdkqs1K2/view',
                'odcinek-36': 'https://drive.google.com/file/d/1IbW-BW9KPzYyDsRQASukbWiIRqCssVH0/view',
                'odcinek-37': 'https://drive.google.com/file/d/11SQ4Z9nIJI0T0Pgk1VC2cRqO7ycNnwDn/view',
                'odcinek-38': 'https://drive.google.com/file/d/1JX_QrJpoI6xtNhVRLgWF-HX5lKsylnx2/view',
                'odcinek-39': 'https://drive.google.com/file/d/165NTaX6PHw8DTxauzXSnqBZegBC-9MfD/view',
                'odcinek-40': 'https://drive.google.com/file/d/1bmX3tKokVbNNdAa4f2fH71W4CNZE5hhI/view',
                'odcinek-41': 'https://drive.google.com/file/d/1pGxolDwZEwwxlgu2YahDDLI7UShpV-j7/view',
                'odcinek-42': 'https://drive.google.com/file/d/15xXVxU9H5CqXE21sjpWrYXVqTCXtVxWP/view',
                'odcinek-43': 'https://drive.google.com/file/d/16VhUqwPMFo5xCUkZYn-PKu1grWqvq0uP/view',
                'odcinek-44': 'https://drive.google.com/file/d/198R7OzglqCw4ErpjM0hrUVPYh_0bqQWD/view',
                'odcinek-45': 'https://drive.google.com/file/d/1F7tqF1drY8iaBjGcx1dz9xedq3-yScJ7/view',
                'odcinek-46': 'https://drive.google.com/file/d/1zb1xBwRKbzeIlxYhbIJEF3go2ZhbdvGm/view',
                'odcinek-47': 'https://drive.google.com/file/d/1vJBH2hqP_tWAf350geI5FI8P6bDBi2eT/view',
                'odcinek-48': 'https://drive.google.com/file/d/1E_cHTh2z9XuA8AXmiv8gRhjN44GWLA21/view',
                'odcinek-49': 'https://drive.google.com/file/d/1G_Z72VK3GymZ2_DP1Q8n72sV3fyZcfxg/view',
                'odcinek-50': 'https://drive.google.com/file/d/1trfEl7TVu_n3rXIZanpSwgYWRl59CbLZ/view',
                'odcinek-51': 'https://drive.google.com/file/d/1sxxe-1FuXvU8JmJkrVLxXkj5OZf34MNl/view',
                'odcinek-52': 'https://drive.google.com/file/d/16Qq3zL8fv2RzsX8ZoTwjXdwH4lv80r2a/view'
                
            },
            'season2': {
                'odcinek-1': 'https://drive.google.com/file/d/1snbkAsKQXLAN1O6NBpIE_L-c32EGgFxO/view',
                'odcinek-2': 'https://drive.google.com/file/d/18Zqcsz659bazHF7NFpSSFopWLwZ4rolP/view',
                'odcinek-3': 'https://drive.google.com/file/d/1C8zBwPNSI7xHYHUftxQJ4fhPhMcsM2nL/view',
                'odcinek-4': 'https://drive.google.com/file/d/1nhMAbAv19QUPbniAuH_BfE9a2SuQoZ8t/view',
                'odcinek-5': 'https://drive.google.com/file/d/1SepK0cbkPwwHnfoMt_b56OPqkF4Ugm8b/view',
                'odcinek-6': 'https://drive.google.com/file/d/1msF8bz7eeTItikELeUesC3fDWv_3vIbD/view',
                'odcinek-7': 'https://drive.google.com/file/d/1--04GJ48HQ4Nh9CLsJTe4yejRpnVEoac/view',
                'odcinek-8': 'https://drive.google.com/file/d/1SB21s3_TenwSlZB531OVzarxSrEcCZkV/view',
                'odcinek-9': 'https://drive.google.com/file/d/1QVHz5IHJjo7F1zrJTD9eAZ8vHu7qJs9B/view',
                'odcinek-10': 'https://drive.google.com/file/d/1JC8WwkL-6YzXNvHD6kJVbZA6SHt1rKoH/view',
                'odcinek-11': 'https://drive.google.com/file/d/1tU7Gbhdn0eW9MFqKwu0boI2cCPgVbkxF/view',
                'odcinek-12': 'https://drive.google.com/file/d/124RGDWGbh4aYK9huoH7rjpEqfau56rWs/view',
                'odcinek-13': 'https://drive.google.com/file/d/1-GYO5Si9fkLlHqs3khYMXGDbRcfUfWtA/view',
                'odcinek-14': 'https://drive.google.com/file/d/1y3I1lrr1Dx6LNgUxKJvo97Pw42y14Nn5/view',
                'odcinek-15': 'https://drive.google.com/file/d/1dENX6LFZ9v-AexnlvN8XYbIsSU2AK_hj/view',
                'odcinek-16': 'https://drive.google.com/file/d/1G8hZZIIxiQgWGjaQJOqTH-KkRs2irJN0/view',
                'odcinek-17': 'https://drive.google.com/file/d/1zOsduRkWAVBfZ9EaKRtqQo554olHJIE3/view',
                'odcinek-18': 'https://drive.google.com/file/d/1QRwRmS8PFmkuAGp1rXdNljPO2B3h2Q9r/view',
                'odcinek-19': 'https://drive.google.com/file/d/1vgCvUW1JrBhlrscjYqU11j9oF3-e_kZz/view',
                'odcinek-20': 'https://drive.google.com/file/d/197dvghJC0ZpMoFeGvxnQtAUE1435GimI/view',
                'odcinek-21': 'https://drive.google.com/file/d/1LFBMghFzXng6ctMYaHdOPpXrJlQ8sFZF/view',
                'odcinek-22': 'https://drive.google.com/file/d/1a80Jb9z2tVjLw-SZ8pXC3R3ujzHPKfgR/view',
                'odcinek-23': 'https://drive.google.com/file/d/16wKvlFQEZkNrgqmqxeSGscRL2ulUYzY6/view',
                'odcinek-24': 'https://drive.google.com/file/d/1tnl7ewldh6wekEAkZi52dEmTgE5agRto/view',
                'odcinek-25': 'https://drive.google.com/file/d/1hUlqlFOjV__X2h60k46Oo8D0ujHxoH-i/view',
                'odcinek-26': 'https://drive.google.com/file/d/1IZZK05jStLV3EiPI0SAWemzXIR2RkYgd/view',
                'odcinek-27': 'https://drive.google.com/file/d/1r9rq1aKtoeH4hyDyPLngFRT_1goAFsrc/view',
                'odcinek-28': 'https://drive.google.com/file/d/1LcNVjw6sf2dh5oCNmYrZpDH4u2kQJb_l/view',
                'odcinek-29': 'https://drive.google.com/file/d/1zK5VL5RbLsKRGrHeGVmy3Sw-XfKXUY21/view',
                'odcinek-30': 'https://drive.google.com/file/d/1HrnzltN86Mj28mNFqBASvp3T6TQ7Euii/view',
                'odcinek-31': 'https://drive.google.com/file/d/1mOPHhWv28_H62YzORAn2SZ8MGIMSeObt/view',
                'odcinek-32': 'https://drive.google.com/file/d/1w9AOEzGD6A9FzlcayaPAFPQz0bR9YkDL/view',
                'odcinek-33': 'https://drive.google.com/file/d/1F98Fdv-7Ps1qnmQWNRr1Vs-_k3MVxfWn/view',
                'odcinek-34': 'https://drive.google.com/file/d/1R8u41JYQrSFlTT7RYCEZqRFINiTQyno1/view',
                'odcinek-35': 'https://drive.google.com/file/d/1jlty-FQ1GW35lnB0-JQ-xRl2uMFTOjCm/view',
                'odcinek-36': 'https://drive.google.com/file/d/1rLXJjkWIj0R1Zr2CRPNqU67yayrA6nln/view',
                'odcinek-37': 'https://drive.google.com/file/d/1gm5Re3qR1q8tZkZ1b-ZLKvJgywuWPh4U/view',
                'odcinek-38': 'https://drive.google.com/file/d/1hBl1CqOxV9TtUtjWq5umV_VbyTQJc7aQ/view',
                'odcinek-39': 'https://drive.google.com/file/d/19kJrZ4XrF_igsXxELp3rtD-eeAVaIAxd/view',
                'odcinek-40': 'https://drive.google.com/file/d/1583PmHn2nIjLg0dT_zNXzpIZBIO3VE5F/view',
                'odcinek-41': 'https://drive.google.com/file/d/1FfRLJXbemTRd9Or5BHLn-4cdkrklHFSJ/view',
                'odcinek-42': 'https://drive.google.com/file/d/1fiW_em4Yczg2-6H4qKeiyMvLODxHLtjL/view',
                'odcinek-43': 'https://drive.google.com/file/d/1H_Q94CG1BFyhw7MYtyfq4wP1d_inPVvz/view',
                'odcinek-44': 'https://drive.google.com/file/d/1Yl2YzRLtyXftYmlvV9qmctd-lwwFG4xU/view',
                'odcinek-45': 'https://drive.google.com/file/d/1mlExSVjDHU_MTF7mGKqq6gmvPhII497u/view',
                'odcinek-46': 'https://drive.google.com/file/d/12feGSBg5apzlMUEDnzX-7OF2dRPFA0Ez/view',
                'odcinek-47': 'https://drive.google.com/file/d/1FXLQDu9MAYtX4MML9gEBqGiQvw8_5F3a/view',
                'odcinek-48': 'https://drive.google.com/file/d/1SZaq6jyl-DKbm31pStrjAJumlXy8Dj5T/view',
                'odcinek-49': 'https://drive.google.com/file/d/1rDHA5t8n5PHlMNASgiIFJb6J2ISBqNNK/view',
                'odcinek-50': 'https://drive.google.com/file/d/1Da1dhhLQsAK6gJtOJ8pP_V0OaO6tcits/view',
                'odcinek-51': 'https://drive.google.com/file/d/1S-SueygrahQdOtps6ZLPtPFymsPvXFCp/view',
                'odcinek-52': 'https://drive.google.com/file/d/1yvZzEDwQ4a1fxikMmvw-y37So7wHh9kO/view'
            },
            'season3': {
                'odcinek-1': 'https://drive.google.com/file/d/1saxeUwT1bqYO5exwIYGSyS_D3tmCLRa1/view',
                'odcinek-2': 'https://drive.google.com/file/d/1hZMC7RqXFP5FJ_B9icDimXPJi-wSBDZr/view',
                'odcinek-3': 'https://drive.google.com/file/d/1S7QHOTruyXU7xzI13qyIOhsEX8fi1_vb/view',
                'odcinek-4': 'https://drive.google.com/file/d/1_d6evq8pBmCIX6qscag2hvtNMmNaor8s/view',
                'odcinek-5': 'https://drive.google.com/file/d/18wKtA7z6mECCiDMo4FVugzx-Fy6FCIlm/view',
                'odcinek-6': 'https://drive.google.com/file/d/1D8KyQt_n6qtQ_EvBRbTWaRWmLSwZ47lA/view',
                'odcinek-7': 'https://drive.google.com/file/d/15-qMx-uwN7x8TzWVlhVIyc1d5pu-GxNF/view',
                'odcinek-8': 'https://drive.google.com/file/d/1NQixaLGWVYRmip3Y6oHSybLfC-plGYDT/view',
                'odcinek-9': 'https://drive.google.com/file/d/1yw7sa4hAORAUCl3q9_BG2wZpTY3TD7RM/view',
                'odcinek-10': 'https://drive.google.com/file/d/1InaQnaJWuM727rfMYpftxxvYKLru8NlB/view',
                'odcinek-11': 'https://drive.google.com/file/d/1EkAJyQANN7QQluorFTHBU8ns-3miI4FG/view',
                'odcinek-12': 'https://drive.google.com/file/d/1GXoc3cdya4EPkKN4ce96N5gGzzSbRB09/view',
                'odcinek-13': 'https://drive.google.com/file/d/1htcDf2hdv0OoiOWiokr37yL9bHbRL5O-/view',
                'odcinek-14': 'https://drive.google.com/file/d/1dFaxBVeQ7kwmEeXu1RUKA-HiqAA8mRyt/view',
                'odcinek-15': 'https://drive.google.com/file/d/1MfKh5bbt5humKXrw3wKb3ur71MJN8hc0/view',
                'odcinek-16': 'https://drive.google.com/file/d/18Uo1Jy5VzhMamtUhV8skFbG5MIXJbhKE/view',
                'odcinek-17': 'https://drive.google.com/file/d/1XVM0474ad3oAFI8wYTrp79Zh9fc7w-57/view',
                'odcinek-18': 'https://drive.google.com/file/d/12G3M2G3Nz-y3HxZiJLorU2ChzuGM0u3t/view',
                'odcinek-19': 'https://drive.google.com/file/d/1mKPuOQ3wdXJBoTPg6NzzuaB5OlNYlRxR/view',
                'odcinek-20': 'https://drive.google.com/file/d/1zKMuNV59Ze96kfiewWDwcUTJLqy3B7Kq/view',
                'odcinek-21': 'https://drive.google.com/file/d/1ogRyRW6JQatTNs834JW3F1q7-hfa54g9/view',
                'odcinek-22': 'https://drive.google.com/file/d/1W7ckOlQNcC8QvATB4qL6d2O7JlJCjB34/view',
                'odcinek-23': 'https://drive.google.com/file/d/19JhjHuZ3ANgZmpDajUL4pMyS2S4TK1w3/view',
                'odcinek-24': 'https://drive.google.com/file/d/1-Eo6oqBZemMUkC63XNxQeicEcAPt6cuH/view',
                'odcinek-25': 'https://drive.google.com/file/d/1xulsd1sl5o9VOksee2Kn5OwS26IfW62T/view',
                'odcinek-26': 'https://drive.google.com/file/d/1Sftxoute96N8Wa9w7SneZuX0icpvRYZl/view',
                'odcinek-27': 'https://drive.google.com/file/d/1OppFX02NHshQKYPTSXA7PKS9NTC9Zus5/view',
                'odcinek-28': 'https://drive.google.com/file/d/1_NoM8L02HxH6HPvNVlrONQ76w_3cHbE5/view',
                'odcinek-29': 'https://drive.google.com/file/d/163r8qEf2pJUFVbaV8U2PehDUpeqie7mT/view',
                'odcinek-30': 'https://drive.google.com/file/d/1xI3wyFmrNVPsP1cfVqZ41nxkxzj3Vjdp/view',
                'odcinek-31': 'https://drive.google.com/file/d/12pmUSEzGHhezHr5-NZkNICIn6ondTb24/view',
                'odcinek-32': 'https://drive.google.com/file/d/1GRyhWxwxFyYvJuIRbvez-j5XZK-SQt_r/view',
                'odcinek-33': 'https://drive.google.com/file/d/1b89DFHhaPiqVWHKy09wmxQfDmLja63vZ/view',
                'odcinek-34': 'https://drive.google.com/file/d/1RCmCmgREMXgBvIFSFboT5gBnGODTWZnX/view',
                'odcinek-35': 'https://drive.google.com/file/d/1pUCABHBIThCb-LNO1ai8wS7ul9_XHO-4/view',
                'odcinek-36': 'https://drive.google.com/file/d/1BsjHOHNGRUYoetbhsTCi0xs-6spwNqEj/view',
                'odcinek-37': 'https://drive.google.com/file/d/1y4YGvrGWbh9dCh5FoN1qoPgp73gWoW1s/view',
                'odcinek-38': 'https://drive.google.com/file/d/1AnAnmyev_HInMoRLQSqgOfQmMEX0iBSi/view',
                'odcinek-39': 'https://drive.google.com/file/d/1kgOSCx7ld4AyWD4U_LHl8EzzrCKBrVJ-/view'
                
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
                'odcinek-1': 'https://drive.google.com/file/d/1AZanfbUqzef5w1zYoQaZ2LEz_cguU3_w/view',
                'odcinek-2': 'https://drive.google.com/file/d/1A_71B1acmreeyj1HC7BeSplV-pCR793O/view',
                'odcinek-3': 'https://drive.google.com/file/d/1Aabxwj_P3GL5-GtMwVnkSai5tu_-jlN-/view',
                'odcinek-4': 'https://drive.google.com/file/d/1AcFHxVt49tTgZEj6A6QChPuCrsGLATLK/view',
                'odcinek-5': 'https://drive.google.com/file/d/1AdHYUotXrOOSEDQ4f-QNRzSQFTbTWhiv/view',
                'odcinek-6': 'https://drive.google.com/file/d/1AlKyVfbe29AzsIQ8BnyTRBlXxqiyKInd/view',
                'odcinek-7': 'https://drive.google.com/file/d/1Ao7-iYAZwA2IXn_s4TvY2hFGSbSdthIm/view',
                'odcinek-8': 'https://drive.google.com/file/d/1AsqjB44HXt_gnkpKbVRpc7XsA2BBYX_T/view',
                'odcinek-9': 'https://drive.google.com/file/d/1AxzASoH9Mhok215A9bBgqT-3-y_bHtOu/view',
                'odcinek-10': 'https://drive.google.com/file/d/1AyKPdy1bsTrKNYyVKe8b19-uC2C2DQ9o/view',
                'odcinek-11': 'https://drive.google.com/file/d/1B40dIZH3D9MalbgUQshUjc_pnHjlrfv_/view',
                'odcinek-12': 'https://drive.google.com/file/d/1BCLBpeXmW_hLNaG1xCScWuZ5XePwoEfL/view',
                'odcinek-13': 'https://drive.google.com/file/d/1BCVQi8YL4E8Ap9FmnPNc4QB4YhfTbL2g/view',
                'odcinek-14': 'https://drive.google.com/file/d/1BFKuHHwGjrQ0YpOXxe7Akaln1u3qeKtN/view',
                'odcinek-15': 'https://drive.google.com/file/d/1BLbPWTRA_9XzmG6ALkoR_poZotdInrhY/view',
                'odcinek-16': 'https://drive.google.com/file/d/1BVDUGs3cyl6uNrHFMA_HXWVpP7bGwYtA/view',
                'odcinek-17': 'https://drive.google.com/file/d/1BVL-v-slMj2U5yfBURC1K4R4LWUROVqQ/view',
                'odcinek-18': 'https://drive.google.com/file/d/1BVuISQGb3osC7-_PkQP4q1R_Xehje-fY/view',
                'odcinek-19': 'https://drive.google.com/file/d/1BbRAOILkHkTGQfcIjXEqqw0BYSscZ6uK/view',
                'odcinek-20': 'https://drive.google.com/file/d/1BdbBmQu-WfeoHVg_5WT-OxwH2-XRw-NT/view'
            },
            'season2': {
                'odcinek-1': 'https://drive.google.com/file/d/1BfFcvLtHRUOgiKoc1TgggbT0v-QibPuh/view',
                'odcinek-2': 'https://drive.google.com/file/d/1BkAjY2o3JNTN6s1aSqX1ZZ6hrzefuCg5/view',
                'odcinek-3': 'https://drive.google.com/file/d/1BmTe3230tQbZ047IdFA0n30Ubh0ZIZEJ/view',
                'odcinek-4': 'https://drive.google.com/file/d/1Bp0nKIkbUNdThbnxUAJqhq-N-rhrM6tr/view',
                'odcinek-5': 'https://drive.google.com/file/d/1BpF1ubVUiI1S-GeDBreyTXnRI7we1m6g/view',
                'odcinek-6': 'https://drive.google.com/file/d/1BsWfSda-1OP26Fc354q-W0cjed1W4KYd/view'
                
            },
            'season3': {
                'odcinek-1': 'https://drive.google.com/file/d/1Bz5qynOG0MWJlo08zGACnh_6_l1h88Ug/view',
                'odcinek-2': 'https://drive.google.com/file/d/1C2kjxCYsHwe2rGexcbgdA4GkvOlsZc4M/view',
                'odcinek-3': 'https://drive.google.com/file/d/1C4xB7nTDkL7NY_HcafKKKjw0rAP9JuDY/view',
                'odcinek-4': 'https://drive.google.com/file/d/1C6rrNyz91faa46o8v-VOw5p7NxB2PFxf/view',
                'odcinek-5': 'https://drive.google.com/file/d/1CA59WkuY2Dlgjd-xT7IzlO11M7Ob3hwd/view',
                'odcinek-6': 'https://drive.google.com/file/d/1CGOLxKRZ3GTCB3DeLuJCHyDAHgvz2i3Q/view',
                'odcinek-7': 'https://drive.google.com/file/d/1CH5PF7I-dK9jzIJyz0Ge_-srxR7CSFdQ/view',
                'odcinek-8': 'https://drive.google.com/file/d/1CU21JC3FwuiARjDb4rLZRJCRA7c0cfbf/view',
                'odcinek-9': 'https://drive.google.com/file/d/1Cbql2EUvSXXcEZ5ti7-3L7QoqXJKJdgV/view',
                'odcinek-10': 'https://drive.google.com/file/d/1Cc9_pnJflo9MQs48Lw_UHK9mpnUZxKXY/view',
                'odcinek-11': 'https://drive.google.com/file/d/1Ck-r6W0CFTmq0UprajrLZh3_M_uCIsGZ/view',
                'odcinek-12': 'https://drive.google.com/file/d/1Ckg9xY-GTIwmwwsVL3exYA-kvOaykY98/view',
                'odcinek-13': 'https://drive.google.com/file/d/1CqmSis_5q_CKC6xLip_Otn2IvEnwWltO/view',
                'odcinek-14': 'https://drive.google.com/file/d/1CuQvByzv-Nr-1XRIE0SSV89aHG9nNT9K/view',
                'odcinek-15': 'https://drive.google.com/file/d/1Cv9OhM0kAAxDxdKwdNau-_-g3znBCjMS/view'
                
            }
        },
        'danny': {
            'season1': {
                'odcinek-1': 'https://drive.google.com/file/d/1_sY8HmbSSfM8q3HPkwVfh9C8x9G8sqMD/view',
                'odcinek-2': 'https://drive.google.com/file/d/1gDUtw33J1PYJI_lTeckh6Dk1-dtYDP5c/view',
                'odcinek-3': 'https://drive.google.com/file/d/1r8zNUzYJCKPhQPSo8ceC-YTDtVSRu8QV/view',
                'odcinek-4': 'https://drive.google.com/file/d/1_hcgncIi4thlA6UneygZGcNdGlobCy0F/view',
                'odcinek-5': 'https://drive.google.com/file/d/1LcsvlYE3SLKFGCEG9fceSn2Q6ocLdbd4/view',
                'odcinek-6': 'https://drive.google.com/file/d/1FFQJI3gZb_VK-jIG0UkbfhJM027zZRF3/view',
                'odcinek-7': 'https://drive.google.com/file/d/1hH2WHtph22V2VPuth95VSX7YTFUDog0t/view',
                'odcinek-8': 'https://drive.google.com/file/d/1_W6JPliQm2p1tjY33pceS8M0zVRY6LZg/view',
                'odcinek-9': 'https://drive.google.com/file/d/1A047PntFJcJ9yUD_Y2cbiNDaDQnu3evL/view',
                'odcinek-10': 'https://drive.google.com/file/d/10YVqCRIu_LnTIH9OL6fdsVp1j4LL3O6C/view',
                'odcinek-11': 'https://drive.google.com/file/d/19El2RVY6wKZizt-tRBVkmQ-uAb9UP-Zc/view',
                'odcinek-12': 'https://drive.google.com/file/d/1vhA78O4DflJB2fdJUXSCQWfZz5wNnTfl/view',
                'odcinek-13': 'https://drive.google.com/file/d/114fPOL5Cn9iDZumoWsCvd42WWteVHebS/view',
                'odcinek-14': 'https://drive.google.com/file/d/1UZiNrwYmMdRstr7-ATg2aDgb8Vz7qa1T/view',
                'odcinek-15': 'https://drive.google.com/file/d/1xE2mbsBr59qGJctxRYtZug2d2B4Xhcrh/view',
                'odcinek-16': 'https://drive.google.com/file/d/17oVTpDiLM8Kw5FvnckfqUyhE_JBHZVVU/view',
                'odcinek-17': 'https://drive.google.com/file/d/1k8Sq0L6MOD1evKkiuXDvNH5G4ndv5jmk/view',
                'odcinek-18': 'https://drive.google.com/file/d/1HJuyfuXcEryX7X5qhb5seYI0I8-_P_sY/view',
                'odcinek-19': 'https://drive.google.com/file/d/1qhN3qQXE7g7kY0_01hMsXBjHQsLDuKLr/view',
                'odcinek-20': 'https://drive.google.com/file/d/1JNE65DTK5Xi3nGY5FyvZJxwWarcHCPHP/view'
            },
            'season2': {
                'odcinek-1': 'https://drive.google.com/file/d/1nWNcfSyztxjSOPhp8xfeSxTYitg-19jC/view',
                'odcinek-2': 'https://drive.google.com/file/d/1Mk5GS3GRs47BjmaGvVsH-1CA7wYkQeOP/view',
                'odcinek-3': 'https://drive.google.com/file/d/1WhKziV-RHRYtnc_KSHwQaBpAH8h3GfON/view',
                'odcinek-4': 'https://drive.google.com/file/d/1mnEw6_PwBgS_8oEshjUruxkD0GaauCcC/view',
                'odcinek-5': 'https://drive.google.com/file/d/1AW_jBxW2dtReuOX_rBoco52nO1OwQGua/view',
                'odcinek-6': 'https://drive.google.com/file/d/10yYtANMj5ac11e_xJxyfgE_MdVDSFO5q/view',
                'odcinek-7': 'https://drive.google.com/file/d/1-bq04zwzqio5cEC8bua_ILkb53_NTJWF/view',
                'odcinek-8': 'https://drive.google.com/file/d/1Ztmxw4X3TCO-NjDgQF6SW-uVRrega8Nb/view',
                'odcinek-9': 'https://drive.google.com/file/d/1-WuhDipNl5Hl_JEK3nvzlFQUPk1xA6nu/view',
                'odcinek-10': 'https://drive.google.com/file/d/19Ol5Hcxvd6VAk0zJGTZU6ZmJ8mmysnKK/view',
                'odcinek-11': 'https://drive.google.com/file/d/1WX540uaa0WYyhxBfiJvnFpBOdBm68Hql/view',
                'odcinek-12': 'https://drive.google.com/file/d/13JaNaMm4UIS02dZyZFZc2WnK0Qs4DcfP/view',
                'odcinek-13': 'https://drive.google.com/file/d/1_UwfvtqsBBYb006pU_3E_-XsTS-4lNDs/view',
                'odcinek-14': 'https://drive.google.com/file/d/1RsoZu9KbC8dkKfVV6Cb5vtuHrNjHbQUw/view',
                'odcinek-15': 'https://drive.google.com/file/d/1R8SwX0J1az0ulT7FX4Hih0KNVXhOHWMh/view',
                'odcinek-16': 'https://drive.google.com/file/d/1fz0mGE0B_OVhvChF0FlC3l5IMawFf1qe/view',
                'odcinek-17': 'https://drive.google.com/file/d/1xjIZxcVdZd-iVpmzBn2n-h02_snWR4q0/view',
                'odcinek-18': 'https://drive.google.com/file/d/1Bv-8pJADJ9mUnmYm2lpsfBeZRVYEkpCQ/view'
                
            },
            'season3': {
                'odcinek-1': 'https://drive.google.com/file/d/1Teko84WP1Mg4U7X6-k921_zZcegdjZz3/view',
                'odcinek-2': 'https://drive.google.com/file/d/1JZkfEwcIwiZrJCazvoIlIT-V4hg9qN5B/view',
                'odcinek-3': 'https://drive.google.com/file/d/1x9jfBK5_TcyBftg1wp5aHYkjuTwKu5LH/view',
                'odcinek-4': 'https://drive.google.com/file/d/1-J4yR4-S9cD1eI8C4o3z8DYcJ2YG4Ajy/view',
                'odcinek-5': 'https://drive.google.com/file/d/11rmi8CFXFmrOk4dBcFmMBRbw9QLhvSZ3/view',
                'odcinek-6': 'https://drive.google.com/file/d/16UNLrMDVsd3lNu-T1wPt3sJ9O-iJnSe-/view',
                'odcinek-7': 'https://drive.google.com/file/d/12E5JhBMM1j5pfy1YdpgtXoqoADxCCoXC/view'
                
            }
        }

    };

    return urls[series] && urls[series][season] && urls[series][season][episode] || '#';
}
// Konfiguracja celu i aktualnej kwoty
const fundraisingGoal = 53; // Ustaw tutaj docelową kwotę
let fundraisingAmount = 10.27; // Ustaw tutaj zebrane środki

// Inicjalizacja licznika
function updateFundraisingDisplay() {
    const goalElement = document.getElementById('fundraising-goal');
    const amountElement = document.getElementById('fundraising-amount');
    const totalElement = document.getElementById('fundraising-total');
    const progressBar = document.getElementById('progress-bar');

    goalElement.textContent = fundraisingGoal + " PLN";
    amountElement.textContent = fundraisingAmount + " PLN";
    totalElement.textContent = fundraisingGoal + " PLN";

    // Obliczanie postępu
    const progressPercentage = (fundraisingAmount / fundraisingGoal) * 100;
    progressBar.style.width = progressPercentage + "%";
}

// Wywołanie funkcji na starcie
updateFundraisingDisplay();
