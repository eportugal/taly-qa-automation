import CryptoJS from 'crypto-js';

describe('User Registration', () => {

  let email;
  let hashEmail;
  const password = 'Password@123';
  let token;

  const extractConfirmationCode = (text) => {
    const match = text.match(/Your confirmation code is (\d+)/);
    return match ? match[1] : 'Código não encontrado';
  };

  const getToken = async (hash) => {
    const API_KEY = 'a35c81e4a9mshe5c9c43c44cd217p17f0d8jsnda4446cf71c4';
    const API_HOST = 'privatix-temp-mail-v1.p.rapidapi.com';
    const apiUrl = `https://privatix-temp-mail-v1.p.rapidapi.com/request/mail/id/${hash}/`;

    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'x-rapidapi-key': API_KEY,
          'x-rapidapi-host': API_HOST
        }
      });
      const data = await response.json();
      const mail = data[0];
      let token = extractConfirmationCode(mail.mail_text_only); 
      console.log(token);
      return token;
    } catch (error) {
      console.error('Erro na chamada da API:', error);
      return null;
    }
  };

  const createHashEmail = (input) => {
    return CryptoJS.MD5(input).toString();
  };

  const createEmail = () => {
    const emailID = Date.now();
    const emailBase = `${emailID}@mocvn.com`;
    const emailHash = createHashEmail(emailBase);
    email = emailBase;
    hashEmail = emailHash;
  };

  describe('Consumer Account', () => {
  
    before(() => {
      createEmail();
    });
    
    after(() => {
      cy.clearCookies();
      cy.clearAllLocalStorage();
    });

    it('Go to TALY site', () => {
      cy.visit('https://dev.devtalysub.com/');
    });

    it('Click Signup or Login', () => {
      cy.get('.justify-end > :nth-child(7)').click()
    });

    it(`Type the email`, () => {
      cy.get('#username').type(email);
      console.log(email);
    });
  
    it(`Click Next`, () => {
      cy.get('#btn_submit_email').click();
      console.log(password);
    });
  
    it(`Type the password`, () => {
      cy.get('#password_signup').type(password);
    });
  
    it(`Click Next`, () => {
      cy.get('#btn_password_check_signup').click();
    });
  
    it(`Type First Name`, () => {
      cy.get('#firstname_signup').type('First Name');
    });
  
    it(`Type Last Name`, () => {
      cy.get('#lastname_signup').type('Last Name');
    });
  
    it(`Check Terms & Condition`, () => {
      cy.get('input.tl-option__input-element[type="checkbox"]').check();
    });
  
    it(`Click Next`, () => {
      cy.get('#btn_check_fields_signup').click();
    });
  
    it(`Wait for email to arrive`, () => {
      cy.wait(5000);
    });
  
    it(`Retrieve and use the confirmation code`, () => {
      cy.wrap(getToken(hashEmail)).then((retrievedToken) => {
        token = retrievedToken;
        expect(token).to.not.be.null;
        cy.get('#code-1').type(token);
      });
    });
  
    it(`Click Next if not already clicked`, () => {
      cy.get('body').then((body) => {
        if (body.find('#btn_verify').length > 0) {
          cy.get('#btn_verify').then(($btn) => {
            if (!$btn.is(':disabled')) {
              cy.wrap($btn).click();
            }
          });
        }
      });
    });
  
    it(`Click Let's go!`, () => {
      cy.get('#btn_link_consumer_signup').click();
    });
  
    it('See if My Account is available', () => {
      cy.visit('/my-account');
    });
  
  });

  describe('Vendor Account', () => {
    
    before(() => {
      createEmail();
    });

    it('Visit TALY page', () => {
      cy.visit('https://dev.devtalysub.com/')
    })

    it('Click on "Partner with us" button', () => {
      cy.get('#header > .justify-end > :nth-child(4)').click()
    })

    it(`Type the email`, () => {
      cy.get('#email_check_vendor').type(email)

    })

    it(`Click Get started`, () => {
      cy.get('#btn_check_email_vendor').click()
    })

    it(`Type the password`, () => {
      cy.get('#password_vendor').type(password)
    })

    it(`Click Next`, () => {
      cy.get('#btn_check_password_vendor').click()
    })

    it(`Wait for email to arrive`, () => {
      cy.wait(5000);
    });
  
    it(`Retrieve and use the confirmation code`, () => {
      cy.wrap(getToken(hashEmail)).then((retrievedToken) => {
        token = retrievedToken;
        expect(token).to.not.be.null;
        cy.get('#code-1').type(token);
      });
    });

    it(`Type First Name`, () => {
      cy.get('input[placeholder="First Name"]').type('First Name')
    })

    it(`Type Last Name`, () => {
      cy.get('input[placeholder="Last Name"]').type('Last Name')
    })

    it(`Type Job Role`, () => {
      cy.get('#job_role_vendor').type('Job Role')
    })

    it(`Check Terms & Condition`, () => {
      cy.get('input.tl-option__input-element[type="checkbox"]').check();
    })

    it(`Click Next`, () => {
      cy.get('#btn_check_fields_vendor').click()
    })

    it(`Type Company Name`, () => {
      cy.get('#company_name_vendor').type('Company Name')
    })

    it(`Click location input`, () => {
      cy.get('#selected_country_vendor').click()
    })

    it(`Click Aland Island`, () => {
      cy.get('#selected_country_vendor > .relative.w-full > :nth-child(1) > .options__container > .options__group > .options__items > :nth-child(1) > .options__item > .rounded-sm > .w-full.inline-block > :nth-child(1) > :nth-child(1) > :nth-child(1) > .flex > .sc-tl-button > .text-base > :nth-child(1) > :nth-child(1) > :nth-child(1)').click()
    })
    
    it(`Click industry input`, () => {
      cy.get('#selected_industries_vendor').click()
    })

    it(`Click Food`, () => {
      cy.get('#selected_industries_vendor > .relative.w-full > :nth-child(1) > .options__container > .options__group > .options__items > :nth-child(1) > .options__item > .text-primary-700 > .w-full.inline-block > :nth-child(1) > :nth-child(1) > :nth-child(1) > .gap-2 > .sc-tl-button > .text-base').click()
    })

    it(`Click ecommerce input`, () => {
      cy.get('#platform_vendor').click()
    })

    it(`Type ecommerce platform`, () => {
      cy.get('#platform_vendor').type('Shopicom')
    })

    it(`Type Website`, () => {
      cy.get('#website_vendor').type('Website Name')
    })

    it(`Click Next`, () => {
      cy.get('#btn_check_fields_company_vendor').click()
    })

    it(`Click Products for home delivery`, () => {
      cy.get('#checkbox_card_vendor').click()
    })

    it(`Click Products for pickup`, () => {
      cy.get('#checkbox_card_pickup_vendor').click()
    })
    
    it(`Click Next`, () => {
      cy.get('#btn_error_option_vendor').click()
    })
    
    it(`Click Let's go!`, () => {
      cy.get('#btn_lets_go_vendor').click()
    })

    it(`Logged!`, () => {
      cy.get('.leading-none > :nth-child(1) > .w-full').should('contain.text', 'Have a tremendous');
    })

  })
})