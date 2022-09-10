export const HEADER = `
query{
  header{
    data{
      attributes{
        sun{
          data{
            attributes{
              formats
            }
          }
        }
        bg{
          data{
            attributes{
              formats
            }
          }
        }
        mn1{
          data{
            attributes{
              formats
            }
          }
        }
        mn2{
          data{
            attributes{
              formats
            }
          }
        }
        mn3{
          data{
            attributes{
              formats
            }
          }
        }
      }
    }
  }
}`;
export const ABOUT = `query{
  about{
   data{
     attributes{
       Hi{
         data{
           attributes{
             formats
           }
         }
       }
       IR{
         data{
           attributes{
             formats
           }
         }
       }
       Pencil{
         data{
           attributes{
             formats
           }
         }
       }
       Idea{
         data{
           attributes{
             formats
           }
         }
       }
       MoreProjects{
         data{
           attributes{
             formats
           }
         }
       }
     }
   }
 }
 }`;
export const PROJECTS = `
query{
  projects{
    data{
      attributes{
        title
       img{
        data{
          attributes{
            formats
          }
        }
      }
       urlGitBack
        urlWebBack
        urlGitFront
        urlWebFront
        Frontend
        Backend
        typescript
        react
        styledComponents
        redux
        localStorage
        framerMotion
        reactHotToast
        node
        strapi
        cloudinary
        graphql
        auth0
        stripe
        tekst1
        tekst2
        tekst3
      }
    }
  }
  }

 `;
