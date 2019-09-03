import React from "react";

class FavBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isInFavs: false,
      heartClass: 'heart'
    };
  }
  async componentDidMount() {
    this.isInFavs();
  }
  componentDidUpdate(prevProps) {
    if (this.props.city.cityid !== prevProps.city.cityid) {
      this.isInFavs();
    }
  }

  isInFavs() {
    let isInFavs = false;
    this.props.favs.forEach(fav => {
      if (fav.cityid === this.props.city.cityid) isInFavs = true;
    });
    this.setState({ isInFavs });
  }

  toglleFromFav = city => {
    if (!this.state.isInFavs) {
      this.props.addTofavs(city);
      this.setState({ heartClass:'heart active' });

      setTimeout(() => {
        this.setState({ heartClass:'heart' });
      }, 2500);
    } else {
      this.props.removeFromfavs(city);
    }
    this.setState({ isInFavs: !this.state.isInFavs });
  };

  render() {
    const { city } = this.props;

    return (
      <div className="fav-btn">
        <button className="full" onClick={() => this.toglleFromFav(city)}>
          <span>
            {!this.state.isInFavs ? "Add To" : "Remove From"} Favorites
          </span>
        </button>
        <span className={this.state.heartClass}></span>
      </div>
    );
  }
}
export default FavBtn;
