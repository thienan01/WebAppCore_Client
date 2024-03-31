import React from 'react';
import { Container, Grid, Typography, Link, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  siteFooter: {
    backgroundColor: '#26272b',
    padding: '45px 0 20px',
    fontSize: 15,
    lineHeight: 24,
    color: '#737373',
  },
  hr: {
    borderTopColor: '#bbb',
    opacity: 0.5,
  },
  h6: {
    color: '#fff',
    fontSize: 16,
    textTransform: 'uppercase',
    marginTop: 5,
    letterSpacing: 2,
  },
  footerLinks: {
    paddingLeft: 0,
    listStyle: 'none',
  },
  footerLinksLi: {
    display: 'block',
  },
  footerLinksA: {
    color: '#737373',
    '&:active, &:focus, &:hover': {
      color: '#3366cc',
      textDecoration: 'none',
    },
  },
  socialIcons: {
    textAlign: 'right',
  },
  socialIconsA: {
    width: 40,
    height: 40,
    lineHeight: '40px',
    marginLeft: 6,
    marginRight: 0,
    borderRadius: '100%',
    backgroundColor: '#33353d',
    '&:active, &:focus, &:hover': {
      color: '#fff',
      backgroundColor: '#29aafe',
    },
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();

  return (
    <footer className={classes.siteFooter}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" className={classes.h6}>About</Typography>
            <Typography variant="body1" className="text-justify">
              Scanfcode.com <i>CODE WANTS TO BE SIMPLE</i> is an initiative to help the upcoming programmers with the code. Scanfcode focuses on providing the most efficient code or snippets as the code wants to be simple. We will help programmers build up concepts in different programming languages that include C, C++, Java, HTML, CSS, Bootstrap, JavaScript, PHP, Android, SQL, and Algorithm.
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h6" className={classes.h6}>Categories</Typography>
            <ul className={classes.footerLinks}>
              <li className={classes.footerLinksLi}><Link href="http://scanfcode.com/category/c-language/" className={classes.footerLinksA}>C</Link></li>
              <li className={classes.footerLinksLi}><Link href="http://scanfcode.com/category/front-end-development/" className={classes.footerLinksA}>UI Design</Link></li>
              <li className={classes.footerLinksLi}><Link href="http://scanfcode.com/category/back-end-development/" className={classes.footerLinksA}>PHP</Link></li>
              <li className={classes.footerLinksLi}><Link href="http://scanfcode.com/category/java-programming-language/" className={classes.footerLinksA}>Java</Link></li>
              <li className={classes.footerLinksLi}><Link href="http://scanfcode.com/category/android/" className={classes.footerLinksA}>Android</Link></li>
              <li className={classes.footerLinksLi}><Link href="http://scanfcode.com/category/templates/" className={classes.footerLinksA}>Templates</Link></li>
            </ul>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="h6" className={classes.h6}>Quick Links</Typography>
            <ul className={classes.footerLinks}>
              <li className={classes.footerLinksLi}><Link href="http://scanfcode.com/about/" className={classes.footerLinksA}>About Us</Link></li>
              <li className={classes.footerLinksLi}><Link href="http://scanfcode.com/contact/" className={classes.footerLinksA}>Contact Us</Link></li>
              <li className={classes.footerLinksLi}><Link href="http://scanfcode.com/contribute-at-scanfcode/" className={classes.footerLinksA}>Contribute</Link></li>
              <li className={classes.footerLinksLi}><Link href="http://scanfcode.com/privacy-policy/" className={classes.footerLinksA}>Privacy Policy</Link></li>
              <li className={classes.footerLinksLi}><Link href="http://scanfcode.com/sitemap/" className={classes.footerLinksA}>Sitemap</Link></li>
            </ul>
          </Grid>
        </Grid>
        <Divider className={classes.hr} />
      </Container>
      <Container>
        <Grid container>
          <Grid item xs={12} md={8} sm={6}>
            <Typography variant="body1" className="copyright-text">
              Copyright &copy; 2017 All Rights Reserved by <Link href="#">Scanfcode</Link>.
            </Typography>
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <ul className={classes.socialIcons}>
              <li><Link href="#" className={classes.socialIconsA}><i className="fa fa-facebook"></i></Link></li>
              <li><Link href="#" className={classes.socialIconsA}><i className="fa fa-twitter"></i></Link></li>
              <li><Link href="#" className={classes.socialIconsA}><i className="fa fa-dribbble"></i></Link></li>
              <li><Link href="#" className={classes.socialIconsA}><i className="fa fa-linkedin"></i></Link></li>
            </ul>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
