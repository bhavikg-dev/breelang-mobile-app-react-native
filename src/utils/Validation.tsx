/* eslint-disable prettier/prettier */
/**
 * Validation
 * @description Input Field Validation Class
 * @version 0.0.1
 */

class Validation {
  errors = [];

  validate = data => {
      let newData = [];

      for (let item of data) {
          let { value, name, rules, type, ignore } = item;

          if (type && type === 'text') {
              value = value.trim();
          }
          if (ignore) {
              newData.push(item);
          } else {
              item.errors = [];

              rules = rules.split('|');

              for (let rule of rules) {
                  let validationRules = [];
                  rule = rule.trim();
                  validationRules = rule.split(':');

                  let error = this.validateData(
                      value,
                      name,
                      validationRules[0],
                      validationRules[1],
                      data
                  );

                  if (error) {
                      item.errors.push(error);
                  }
              }

              newData.push(item);
          }
      }

      return newData;
  };

  messages = (attribute, rule, ruleData) => {
      switch (rule) {
          case 'required':
              return `${attribute} is required.`;
          case 'email':
              return `${attribute} is not valid.`;
          case 'us_phone_number':
              return `${attribute} should be a valid US number.`;
          case 'alpha':
              return `${attribute} should only consist of alphabetic characters.`;
          case 'max':
              return `${attribute} may not be greater than ${ruleData} characters.`;
          case 'min':
              return `${attribute} must be at least ${ruleData} characters.`;
          case 'max_val':
              return `${attribute} may not be greater than ${ruleData}.`;
          case 'min_val':
              return `${attribute} must be at least ${ruleData}.`;
          case 'arrayMax':
              return `${attribute} total may not be greater than ${ruleData}.`;
          case 'arrayMin':
              return `${attribute} total must be at least of total ${ruleData}.`;
          case 'numeric':
              return `${attribute} should only consist of numeric characters.`;
          case 'no_space':
              return `${attribute} should not have any space in between.`;
          case 'match_index':
              return `${attribute} does not match with ${ruleData}.`;
          default:
              break;
      }
  };

  validateData = (field, name, rule, ruleData, allFields) => {
      switch (rule) {
          case 'required':
              return this.fieldIsRequired(field, name, rule);
          case 'email':
              return this.fieldIsEmail(field, name, rule);
          case 'us_phone_number':
              return this.USPhoneNumber(field, name, rule);
          case 'alpha':
              return this.fieldIsAlpha(field, name, rule);
          case 'max':
              return this.fieldMax(field, name, rule, ruleData);
          case 'min':
              return this.fieldMin(field, name, rule, ruleData);
          case 'max_val':
              return this.fieldMaxVal(field, name, rule, ruleData);
          case 'min_val':
              return this.fieldMinVal(field, name, rule, ruleData);
          case 'arrayMax':
              return this.fieldMax(field, name, rule, ruleData);
          case 'arrayMin':
              return this.fieldMin(field, name, rule, ruleData);
          case 'numeric':
              return this.isNumeric(field, name, rule);
          case 'no_space':
              return this.noSpace(field, name, rule);
          case 'match_index':
              return this.matchIndex(field, name, rule, ruleData, allFields);

          default:
              break;
      }
  };

  fieldIsRequired = (field, name, rule) => {
      if (field == null || field == undefined) {
          return this.messages(name, rule);
      } else if (typeof field == 'object' && field.length === 0) {
          return this.messages(name, rule);
      } else if (!field) {
          return this.messages(name, rule);
      }
  };

  fieldIsEmail = (field, name, rule) => {
      let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (!regex.test(field)) {
          return this.messages(name, rule);
      }
  };

  USPhoneNumber = (field, name, rule) => {
      let regex = /^1?\d{10}$/;

      if (!regex.test(field)) {
          return this.messages(name, rule);
      }
  };

  fieldIsAlpha = (field, name, rule) => {
      let regex = /^$|^[a-zA-Z ]+$/;

      if (!regex.test(field)) {
          return this.messages(name, rule);
      }
  };

  fieldMax = (field, name, rule, ruleData) => {
      if (field.length > +ruleData) {
          return this.messages(name, rule, ruleData);
      }
  };

  fieldMin = (field, name, rule, ruleData) => {
      if (field.length < +ruleData) {
          return this.messages(name, rule, ruleData);
      }
  };

  fieldMaxVal = (field, name, rule, ruleData) => {
      if (field > +ruleData) {
          return this.messages(name, rule, ruleData);
      }
  };

  fieldMinVal = (field, name, rule, ruleData) => {
      if (field < +ruleData) {
          return this.messages(name, rule, ruleData);
      }
  };

  isNumeric = (field, name, rule) => {
      let isNumeric = !isNaN(parseFloat(field)) && isFinite(field);

      if (!isNumeric) {
          return this.messages(name, rule);
      }
  };

  noSpace = (field, name, rule) => {
      let regex = /^$|^[^\s]+$/;

      if (!regex.test(field)) {
          return this.messages(name, rule);
      }
  };

  isValidTime = time => {
      let regex = /^([0-1]?[0-9]|2[0-4]):([0-5][0-9])?$/;
      return regex.test(time);
  };

  matchIndex = (field, name, rule, ruleData, allFields) => {
      let secondField = allFields[ruleData];
      if (secondField && field !== secondField.value) {
          return this.messages(name, rule, secondField.name);
      }
  }
}

export default (Validation = new Validation());
