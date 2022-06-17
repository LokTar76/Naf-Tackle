import { Injectable } from '@angular/core';
import { NewsItem } from '../components/widgets/news-board/news-item/news-item.interface';

@Injectable()
export class NewsService {

    constructor() {

    }

    createDummyCompanyNews(): NewsItem[] {
        let lst = new Array<NewsItem>();
        lst.push({
            title: "This is the first company news.",
            imagePath: "assets/image/news/company1.png",
            dtCreated: "October 31, 2020",
            description: "To celebrate the release of Realis Fangstick 150, we will be starting a Fang Ops-themed giveaway. Our magnum sized top water pencil with a “Quatro Knocker” so loud it … "
        });
        lst.push({
            title: "This is the second company news.",
            imagePath: "assets/image/news/company2.jpg",
            dtCreated: "October 30, 2020",
            description: "Have you ever wondered if you’ve caught the same fish twice is a question many anglers often ask themselves, particularly those who practice catch and release. DPI has received reports of … "
        });
        lst.push({
            title: "Jervis Bay Lures coming on board",
            imagePath: "assets/image/news/company3.jpg",
            dtCreated: "August 11, 2020",
            description: '"Since the first 8" Little Dingo hit the water in April 2004 the Dingo range of JB Lures have rewritten the record books, Heaviest Gamefish in Australian Waters … "'
        });
        return lst;
    }

    createDummyStaffReports(): Array<NewsItem> {
        let lst = new Array<NewsItem>();
        lst.push({
            title: "Jervs bay squids are on fire",
            imagePath: "assets/image/reports/report1.jpg",
            dtCreated: "October 30, 2020",
            description: "Squid can be found in estuarine and inshore habitats from inshore reefs and weed beds to rock walls, jetties and offshore man made or natural structures. Being  … "
        });
        lst.push({
            title: "Gamefishing Report",
            imagePath: "assets/image/reports/report2.jpg",
            dtCreated: "October 21, 2020",
            description: "Striped marlin flesh is dark and strongly flavoured. It is firmly textured and quite low in moisture. Most suited to grilling, marlin can also be prepared by baking … "
        });
        lst.push({
            title: "Weekly Report",
            imagePath: "assets/image/reports/report3.jpg",
            dtCreated: "October 16, 2020",
            description: "Luke from Leisure Coast Tackle at Corrimal said last weekends sensational weather was welcomed by our locals but had a few holiday makers wishing they could have … "
        });
        return lst;
    }

}
