import {
  Component,
  Input
} from "@angular/core";

@Component({
  selector: "app-star-ratings-item",
  templateUrl: "./star-ratings-item.component.html",
  styleUrls: ["./star-ratings-item.component.scss"]
})
export class StarRatingsItemComponent {
  @Input() public rating = 5;

  public get fullStars(): number[] {
    const totalFullStars = Math.floor(this.rating);

    return Array(totalFullStars).fill(0);
  }

  public get hasHalfStar(): boolean {
    const highestRating = 5;
    return (this.rating - Math.floor(this.rating) >= 0.5) && this.rating !== highestRating;
  }

  public get emptyStars(): number[] {
    const highestRating = 5;
    const totalEmptyStars = Math.floor(highestRating - this.rating);

    return Array(totalEmptyStars).fill(0);
  }
}

