export default class RoomModel implements IRoomModel {
  constructor(...photoUrls: string[]) {
    this.photoUrls = photoUrls;
    this.setCurrentPhotoProps(0);
  }

  private photoUrls: string[];

  private currentPhotoProps!: IPhotoProps;

  private setCurrentPhotoProps(photoIndex: number) {
    let index = photoIndex;
    const maxIndex = this.photoUrls.length - 1;
    if (index > maxIndex) index = maxIndex;
    else if (index < 0) index = 0;
    this.currentPhotoProps = {
      url: this.photoUrls[index],
      index,
    };
  }

  getNextPhotoProps() {
    const { index } = this.currentPhotoProps;
    this.setCurrentPhotoProps(index + 1);
    return this.currentPhotoProps;
  }

  getPrevPhotoProps() {
    const { index } = this.currentPhotoProps;
    this.setCurrentPhotoProps(index - 1);
    return this.currentPhotoProps;
  }

  getPhotoUrlByIndex(index: number) {
    const url = this.photoUrls[index];
    return url;
  }
}
