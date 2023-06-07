// import "./Blog.css";
// import "./color.css";
// import "./responsive.css";
// import "./rtl.css";
// import "./bootstrap.css";
// import s1 from "./Blog.module.css";
import s2 from "./color.module.css";
import s3 from "./responsive.module.css";
import s4 from "./rtl.module.css";
import s5 from "./bootstrap.module.css";

import image1 from "../../images/blogs/image1.jpeg";
import image2 from "../../images/blogs/image2.jpeg";
import image3 from "../../images/blogs/image3.jpeg";
import image4 from "../../images/blogs/image4.jpeg";
import image5 from "../../images/blogs/image5.jpeg";
import image6 from "../../images/blogs/image6.jpeg";
import image7 from "../../images/blogs/image7.jpeg";
import image8 from "../../images/blogs/image8.jpeg";

import admin1 from "../../images/blogs/admin-1.png";
import admin2 from "../../images/blogs/admin-2.png";
import admin3 from "../../images/blogs/admin-3.png";
import admin4 from "../../images/blogs/admin-4.png";
import admin5 from "../../images/blogs/admin-5.png";

import shape70 from "../../images/blogs/shape-70.png";
import shape71 from "../../images/blogs/shape-71.png";

const joinClasses = (...classes) => {
  return classes.map((className) => className).join(" ");
};

const styles = { ...s2, ...s3, ...s4, ...s5 };

const Blogs = () => {
  return (
    <>
      <section class={styles["page-title-two"]} style={{ marginTop: 75 }}>
        <div
          class={joinClasses(
            styles["title-box"],
            styles["centred"],
            styles["bg-color-2"]
          )}
        >
          <div class={styles["pattern-layer"]}>
            <div
              class={styles["pattern-1"]}
              //   style="background-image: url(/static/images/shape/shape-70.png);"
              style={{ backgroundImage: shape70 }}
            ></div>
            <div
              class={styles["pattern-2"]}
              //   style="background-image: url(/static/images/shape/shape-71.png);"
              style={{ backgroundImage: shape71 }}
            ></div>
          </div>
          <div class={styles["auto-container"]}>
            <div class={styles["title"]}>
              <h1>Blogs</h1>
            </div>
          </div>
        </div>
      </section>
      <section class={styles["sidebar-page-container"]}>
        <div class={styles["auto-container"]}>
          <div class={joinClasses(styles["row"], styles["clearfix"])}>
            <div
              class={joinClasses(
                styles["col-lg-8"],
                styles["col-md-12"],
                styles["col-sm-12"],
                styles["content-side"]
              )}
            >
              <div class={styles["blog-standard-content"]}>
                <div class={styles["news-block-one"]}>
                  <div class={styles["inner-box"]}>
                    <figure class={styles["image-box"]}>
                      <img src={image1} alt="" />
                      <a href="blog-details-2.html" class={styles["link"]}>
                        <i
                          class={joinClasses(styles["fas"], styles["fa-link"])}
                        ></i>
                      </a>
                      <span class={styles["category"]}>Featured</span>
                    </figure>
                    <div class={styles["lower-content"]}>
                      <h3>
                        <a href="{% url 'blogDetailsView' %}">
                          Including animation in your design system
                        </a>
                      </h3>
                      <ul class={styles["post-info"]}>
                        <li>
                          <img src={admin1} alt="" />
                          <a href="index-2.html">Eva Green</a>
                        </li>
                        <li>April 23, 2020</li>
                      </ul>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisic do
                        eiusmod tempor incididunt labore dolore magna aliqua
                        enim minim veniam. quis nostrud exercitation.
                      </p>
                      <div class={styles["link"]}>
                        <a href="{% url 'blogDetailsView' %}">
                          <i class={styles["icon-Arrow-Right"]}></i>
                        </a>
                      </div>
                      <div class={styles["btn-box"]}>
                        <a
                          href="{% url 'blogDetailsView' %}"
                          class={styles["theme-btn-one"]}
                        >
                          Read more<i class={styles["icon-Arrow-Right"]}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class={styles["news-block-one"]}>
                  <div class={styles["inner-box"]}>
                    <figure class={styles["image-box"]}>
                      <img src={image2} alt="" />
                      <a href="blog-details-2.html" class={styles["link"]}>
                        <i
                          class={joinClasses(styles["fas"], styles["fa-link"])}
                        ></i>
                      </a>
                      <span class={styles["category"]}>Featured</span>
                    </figure>
                    <div class={styles["lower-content"]}>
                      <h3>
                        <a href="{% url 'blogDetailsView' %}">
                          Great food is not just eating energy.
                        </a>
                      </h3>
                      <ul class={styles["post-info"]}>
                        <li>
                          <img src={admin2} alt="" />
                          <a href="index-2.html">Eva Green</a>
                        </li>
                        <li>April 22, 2020</li>
                      </ul>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisic do
                        eiusmod tempor incididunt labore dolore magna aliqua
                        enim minim veniam. quis nostrud exercitation.
                      </p>
                      <div class={styles["link"]}>
                        <a href="{% url 'blogDetailsView' %}">
                          <i class={styles["icon-Arrow-Right"]}></i>
                        </a>
                      </div>
                      <div class={styles["btn-box"]}>
                        <a
                          href="{% url 'blogDetailsView' %}"
                          class={styles["theme-btn-one"]}
                        >
                          Read more<i class={styles["icon-Arrow-Right"]}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class={styles["news-block-one"]}>
                  <div class={styles["inner-box"]}>
                    <figure class={styles["image-box"]}>
                      <img src={image3} alt="" />
                      <a href="blog-details-2.html" class={styles["link"]}>
                        <i
                          class={joinClasses(styles["fas"], styles["fa-link"])}
                        ></i>
                      </a>
                      <span class={styles["category"]}>Featured</span>
                    </figure>
                    <div class={styles["lower-content"]}>
                      <h3>
                        <a href="{% url 'blogDetailsView' %}">
                          The smell of good bread baking.
                        </a>
                      </h3>
                      <ul class={styles["post-info"]}>
                        <li>
                          <img src={admin3} alt="" />
                          <a href="index-2.html">Eva Green</a>
                        </li>
                        <li>April 21, 2020</li>
                      </ul>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisic do
                        eiusmod tempor incididunt labore dolore magna aliqua
                        enim minim veniam. quis nostrud exercitation.
                      </p>
                      <div class={styles["link"]}>
                        <a href="{% url 'blogDetailsView' %}">
                          <i class={styles["icon-Arrow-Right"]}></i>
                        </a>
                      </div>
                      <div class={styles["btn-box"]}>
                        <a
                          href="{% url 'blogDetailsView' %}"
                          class={styles["theme-btn-one"]}
                        >
                          Read more<i class={styles["icon-Arrow-Right"]}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class={styles["news-block-one"]}>
                  <div class={styles["inner-box"]}>
                    <figure class={styles["image-box"]}>
                      <img src={image4} alt="" />
                      <a href="blog-details-2.html" class={styles["link"]}>
                        <i
                          class={joinClasses(styles["fas"], styles["fa-link"])}
                        ></i>
                      </a>
                      <span class={styles["category"]}>Featured</span>
                    </figure>
                    <div class={styles["lower-content"]}>
                      <h3>
                        <a href="{% url 'blogDetailsView' %}">
                          Including animation in your design system
                        </a>
                      </h3>
                      <ul class={styles["post-info"]}>
                        <li>
                          <img src={admin4} alt="" />
                          <a href="index-2.html">Eva Green</a>
                        </li>
                        <li>April 20, 2020</li>
                      </ul>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisic do
                        eiusmod tempor incididunt labore dolore magna aliqua
                        enim minim veniam. quis nostrud exercitation.
                      </p>
                      <div class={styles["link"]}>
                        <a href="{% url 'blogDetailsView' %}">
                          <i class={styles["icon-Arrow-Right"]}></i>
                        </a>
                      </div>
                      <div class={styles["btn-box"]}>
                        <a
                          href="{% url 'blogDetailsView' %}"
                          class={styles["theme-btn-one"]}
                        >
                          Read more<i class={styles["icon-Arrow-Right"]}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class={styles["news-block-one"]}>
                  <div class={styles["inner-box"]}>
                    <figure class={styles["image-box"]}>
                      <img src={image5} alt="" />
                      <a href="blog-details-2.html" class={styles["link"]}>
                        <i
                          class={joinClasses(styles["fas"], styles["fa-link"])}
                        ></i>
                      </a>
                      <span class={styles["category"]}>Featured</span>
                    </figure>
                    <div class={styles["lower-content"]}>
                      <h3>
                        <a href="{% url 'blogDetailsView' %}">
                          The smell of good bread baking.
                        </a>
                      </h3>
                      <ul class={styles["post-info"]}>
                        <li>
                          <img src={admin5} alt="" />
                          <a href="index-2.html">Eva Green</a>
                        </li>
                        <li>April 19, 2020</li>
                      </ul>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisic do
                        eiusmod tempor incididunt labore dolore magna aliqua
                        enim minim veniam. quis nostrud exercitation.
                      </p>
                      <div class={styles["link"]}>
                        <a href="{% url 'blogDetailsView' %}">
                          <i class={styles["icon-Arrow-Right"]}></i>
                        </a>
                      </div>
                      <div class={styles["btn-box"]}>
                        <a
                          href="{% url 'blogDetailsView' %}"
                          class={styles["theme-btn-one"]}
                        >
                          Read more<i class={styles["icon-Arrow-Right"]}></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class={joinClasses(
                styles["col-lg-4"],
                styles["col-md-12"],
                styles["col-sm-12"],
                styles["sidebar-side"]
              )}
            >
              <div class={styles["blog-sidebar"]}>
                <div
                  class={joinClasses(
                    styles["sidebar-widget"],
                    styles["post-widget"]
                  )}
                >
                  <div class={styles["widget-title"]}>
                    <h3>Recent Posts</h3>
                  </div>
                  <div class={styles["post-inner"]}>
                    <div class={styles["post"]}>
                      <figure class={styles["post-thumb"]}>
                        <a href="{% url 'blogDetailsView' %}">
                          <img src={image6} alt="" />
                        </a>
                      </figure>
                      <h5>
                        <a href="{% url 'blogDetailsView' %}">
                          Baking can be done with a few things.
                        </a>
                      </h5>
                      <p>April 10, 2020</p>
                    </div>
                    <div class={styles["post"]}>
                      <figure class={styles["post-thumb"]}>
                        <a href="{% url 'blogDetailsView' %}">
                          <img src={image7} alt="" />
                        </a>
                      </figure>
                      <h5>
                        <a href="{% url 'blogDetailsView' %}">
                          Great food is not just eating energy.
                        </a>
                      </h5>
                      <p>April 09, 2020</p>
                    </div>
                    <div class={styles["post"]}>
                      <figure class={styles["post-thumb"]}>
                        <a href="{% url 'blogDetailsView' %}">
                          <img src={image8} alt="" />
                        </a>
                      </figure>
                      <h5>
                        <a href="{% url 'blogDetailsView' %}">
                          The smell of good bread baking.
                        </a>
                      </h5>
                      <p>April 08, 2020</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
