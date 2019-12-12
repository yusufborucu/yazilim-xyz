<template>
  <div>
    <div class="loading" :style="isLoading">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
    <notifications group="app" position="top center" />
  </div>
</template>

<script>
  import Header from "./components/shared/Header";
  import Footer from "./components/shared/Footer";

  export default {
    components: {
      appHeader: Header,
      appFooter: Footer
    },
    created() {
      this.$store.dispatch("initAuth");
    },
    computed: {
      isLoading() {
				if (this.$store.getters.getLoading) {
					return {
						display: "block"
					}
				} else {
					return {
						display: "none"
					}
				}
			}
    }
  }
</script>

<style lang="scss">

.login-form {
  border: 1px solid #95a5a6;
  border-radius: 5px;
  padding: 10px;
}

.forgot-password {
  float: right;
}

.quillWrapper {
  background: white;
}

.username {
  font-size: 20px;
}

.user-feature {
  border: 1px solid #343a40;
  border-radius: 5px;
  padding: 10px;
}

.image-upload > input {
  display: none;
}

.image-upload > label > img:hover {
  transform: scale(1.1);
}

pre {
  background-color: #343a40;
  color: #fff;
  padding: 10px;
}

.vote {
  min-width: 50px;
}

.vote-count {
  margin: 10px;
}

:root {
  --color-main: #3b648e;
  --color-main-opacity-15: rgba(59, 100, 142, 0.15);
  --color-main-opacity-30: rgba(59, 100, 142, 0.3);
  --color-main-opacity-40: rgba(59, 100, 142, 0.4);
  --color-main-opacity-50: rgba(59, 100, 142, 0.5);
  --color-grey: #fafafb;
  --color-green: #28a745;
  --color-red: #dc3545;
}

body {
  font-family: 'Montserrat', sans-serif;
  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
}

svg {
  width: 16px;
  height: 16px;
}

#header {
  background-color: var(--color-grey);
  box-shadow: 0 1px 0 rgba(23, 24, 25, 0.1), 0 1px 7px rgba(92, 100, 109, 0.1);
  .main-menu {
    padding: 0;
    .navbar-brand {
      font-size: 20px;
      img {
        margin-right: 5px;
      }
    }
    .main-menu-content {
      .navbar-nav {
        margin: 0 32px;
        .nav-item {
          font-size: 13px;
          font-weight: 500;
          .nav-link {
            position: relative;
            padding: 16px 14px;
            &:after {
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 2px;
            }
          }
          &.active {
            font-weight: 600;
            .nav-link {
              &:after {
                background-color: var(--color-main);
              }
            }
          }
        }
      }
      .search-content {
        flex: 1;        
        .fg-icon {
          .form-control {
            &:focus {
              &+svg {
                path {
                  fill: var(--color-main);
                }
              }
            }
          }
          svg {
            path {
              transition: .2s;
            }
          }
        }
      }
      .header-user-menu {
        margin-left: 64px;
        ul {
          padding: 0;
          margin: 0;
          list-style: none;
          display: flex;
          align-items: center;
          li {
            font-size: 13px;
            padding: 0 10px;
            a {
              text-decoration: none;
              font-weight: 500;
              color: var(--color-main);
            }
            button {
              font-size: 13px;
              background-color: var(--color-main);
              border-color: var(--color-main);
              &:hover {
                background-color: #305173;
                border-color: #2c4b6a;
              }
            }
          }
        }
      }
    }
  }
}

.content {
  padding: 30px 0;
  .content-cols {
    display: flex;
    .left-content {
      min-width: 160px;
    }
    .center-content {
      flex: 1;
      margin: 0 30px;
      padding: 0 30px;
      border-right: 1px solid #e9e9ef;
      border-left: 1px solid #e9e9ef;
    }
    .right-content {
      min-width: 210px;
    }
  }
}

.sidebar-title,
.section-title {
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: 500;
}

.sidebar {
  &.sidebar-tags {
    position: sticky;
    top: 30px;
  }
}

.tag-list {
  margin-bottom: 10px;
  li {
    display: flex;
    align-items: center;
    margin: 3px 0;
    a {
      font-size: 13px;
      text-decoration: none;
      background-color: var(--color-main-opacity-30);
      color: var(--color-main);
      padding: 3px 8px;
      transition: .3s;
      border-radius: 3px;
      &:hover {
        background-color: var(--color-main-opacity-40);
      }
    }
    .count {
      margin-left: 5px;
      font-size: 11px;
    }
  }
}

.user-list {
  margin-bottom: 10px;
  li {
    a {
      display: flex;
      align-items: center;
      color: #2b2945;
      font-weight: 500;
      padding: 5px 0;
      transition: .3s;
      .avatar {
        min-width: 36px;
        width: 36px;
        height: 36px;
        border-radius: 50%;
      }
      .username {
        flex: 1;
        margin: 0 10px;
        font-size: 13px;
      }
      .count {
        font-size: 12px;
      }
      &:hover {
        color: #0072e6;
      }
    }
  }
}

.questions {
  padding: 32px 0;
  .question {
    display: flex;
    border-bottom: 1px solid #e9e9ef;
    padding: 22px 0;
    .question-left {
      min-width: 60px;
      margin-right: 12px;
      .count {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin-bottom: 6px;
        border: 1px solid #d6d6dc;
        color: #2b2929;
        padding: 3px 0;
        transition: .3s;
        span {
          font-size: 18px;
          font-weight: 600;
        }
        small {
          font-size: 10px;
        }
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
    .question-center {
      flex: 1;
      .question-title {
        color: var(--color-main);
        font-weight: 500;
        transition: .3s;
      }
      .question-description {
        font-size: 12px;
      }
      .tags {
        flex: 1;
        .tag-list {
          display: flex;
          margin: 0;
          li {
            margin: 0 3px;
            a {
              background-color: var(--color-main-opacity-15);
            }
          }
        }
      }
      .author-date {
        a {
          color: var(--color-main);
          img {
            min-width: 24px;
            width: 24px;
            height: 24px;
            border-radius: 50%;
          }
          .username {
            font-size: 13px;
            margin: 0 10px;
          }
        }
        .date {
          font-size: 11px;
          float: right;
          margin: -5px 10px;
        }
      }
    }
    &:hover {
      .question-left {
        .count {
          border-color: #a59e9e;
          color: var(--color-main);
        }
      }
      .question-center {
        .question-title {
          color: #0072e6;
        }
        .author-date {
          a {
            color: #0072e6;
          }
        }
        .tags {
          .tag-list {
            li {
              a {
                background-color: var(--color-main-opacity-30);
              }
            }
          }
        }
      }
    }
    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      border: none;
      padding-bottom: 0;
    }
  }
}

#footer {
  position: relative;
  padding: 18px 0;
  background-color: #e2e8ee;
  box-shadow: 0 -1px 0 rgba(23, 24, 25, 0.1), 0 -1px 7px rgba(92, 100, 109, 0.1);
  .copyright {
    font-size: 13px;
    font-weight: 500;
    text-align: center;
  }
}

.form-control,
.btn {
  &:focus {
    box-shadow: none;
    outline: none;
  }
}

.form-control {
  font-size: 15px;
  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    font-size: 13px;
  }
  &::-moz-placeholder { /* Firefox 19+ */
    font-size: 13px;
  }
  &:-ms-input-placeholder { /* IE 10+ */
    font-size: 13px;
  }
  &:-moz-placeholder { /* Firefox 18- */
    font-size: 13px;
  }
  &:focus {
    border-color: var(--color-main);
  }
}

.form-group {
  &.fg-icon {
    position: relative;
    .form-control {
      padding-left: 35px;
    }
    svg {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(12px,-50%);
    }
  }
}

.more-link {
  text-decoration: none;
  font-size: 13px;
  color: var(--color-main);
  font-weight: 500;
  display: flex;
  align-items: center;
  svg {
    width: 10px;
    height: 10px;
    margin-left: 4px;
    transition: .2s;
  }
  &:hover {
    svg {
      margin-left: 7px;
    }
  }
}


.add-link {
  text-decoration: none;
  font-size: 14px;
  color: var(--color-green);
  font-weight: 500;
  display: flex;
  align-items: center;
  transition: .3s;
  svg {
    width: 14px;
    height: 14px;
    margin-right: 6px;
    margin-top: -1px;
    path {
      fill: var(--color-green);
      transition: .3s;
    }
  }
  &:hover {
    color: var(--color-main);
    svg {
      path {
        fill: var(--color-main)
      }
    }
  }
}

.pagination {
  .page-item {
    font-size: 14px;
    .page-link {
      border: none;
      color: #2b2945;
      font-weight: 500;
      &:focus {
        outline: none;
        box-shadow: none;
      }
    }
    &.active {
      .page-link {
        z-index: 3;
        background-color: var(--color-main);
        border-color: var(--color-main);
        border-radius: 3px;
        color: #fff;
      }
    }
  }
}

</style>